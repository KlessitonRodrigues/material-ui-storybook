import {
  Box,
  Table as MuiTable,
  TableRow as MuiTableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from '@mui/material';
import { useMemo } from 'react';

export interface TableProps {
  items: Record<string, any>[];
  columns: {
    label: string;
    key: string;
    responsive?: 'sm' | 'md' | 'lg';
    render?: (item: any) => React.ReactNode;
  }[];
  isLoading?: boolean;
  onSelect?: (item: any) => void;
}

const breakpointMap = { sm: 'sm', md: 'md', lg: 'lg' } as const;

export const Table = (props: TableProps) => {
  const { items, columns, isLoading, onSelect } = props;

  const tableTitles = useMemo(() => {
    return columns.map(({ key, label, responsive }) => <TableCell key={key}>{label}</TableCell>);
  }, [columns]);

  const tableRows = useMemo(() => {
    return items.map((item, index) => (
      <MuiTableRow
        key={index}
        onClick={() => onSelect?.(item)}
        sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'var(--color-bg3)' } }}
      >
        {columns.map(column => (
          <TableCell
            key={column.key}
            sx={
              column.responsive
                ? { display: { [breakpointMap[column.responsive]]: 'table-cell' } }
                : undefined
            }
          >
            {column.render ? column.render(item) : item[column.key]}
          </TableCell>
        ))}
      </MuiTableRow>
    ));
  }, [items, columns, onSelect]);

  return (
    <Box data-loading={isLoading} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <TableContainer>
        <MuiTable>
          <TableHead sx={{ backgroundColor: 'var(--color-bg2)' }}>
            <MuiTableRow>{tableTitles}</MuiTableRow>
          </TableHead>
          <tbody>{tableRows}</tbody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};
