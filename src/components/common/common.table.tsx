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

const getResponsiveStyle = (responsive?: 'sm' | 'md' | 'lg') => {
  if (!responsive) return '';
  // sm:table-cell md:table-cell lg:table-cell
  return `hidden ${responsive}:table-cell`;
};

export const Table = (props: TableProps) => {
  const { items, columns, isLoading, onSelect } = props;

  const tableTitles = useMemo(() => {
    return columns.map(({ key, label, responsive, render }) => (
      <th key={key} className={getResponsiveStyle(responsive)}>
        {label}
      </th>
    ));
  }, [columns]);

  const tableRows = useMemo(() => {
    return items.map((item, index) => (
      <tr key={index} className="hover:bg-bg3 cursor-pointer" onClick={() => onSelect?.(item)}>
        {columns.map(column => (
          <td key={column.key} className={getResponsiveStyle(column.responsive)}>
            {column.render ? column.render(item) : item[column.key]}
          </td>
        ))}
      </tr>
    ));
  }, [items, columns, onSelect]);

  return (
    <div className="w-full">
      <table className="table">
        <thead className="bg-bg2">
          <tr>{tableTitles}</tr>
        </thead>
        <tbody data-loading={isLoading}>{tableRows}</tbody>
      </table>
    </div>
  );
};
