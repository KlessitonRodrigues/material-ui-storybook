import { Box } from '@mui/material';

type IFlex = {
  className?: string;
  flexY?: 'center' | 'start' | 'end' | 'between' | 'stretch';
  flexX?: 'center' | 'start' | 'end' | 'between' | 'stretch';
  responsive?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const alignMap = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  stretch: 'stretch',
} as const;

const breakpointMap = { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': 'xl' } as const;

export const Row = (props: IFlex) => {
  const { flexY, flexX, gap, responsive, ...RowProps } = props;
  const breakpoint = responsive ? breakpointMap[responsive] : null;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: alignMap[flexX || 'start'],
        alignItems: alignMap[flexY || 'center'],
        gap: (gap ?? 2) * 8,
        ...(breakpoint ? { flexDirection: { xs: 'column', [breakpoint]: 'row' } as object } : null),
      }}
      {...RowProps}
    />
  );
};

export const Column = (props: IFlex) => {
  const { flexY, flexX, gap, ...ColumnProps } = props;

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: alignMap[flexY || 'start'],
        alignItems: alignMap[flexX || 'center'],
        gap: (gap ?? 2) * 8,
      }}
      {...ColumnProps}
    />
  );
};
