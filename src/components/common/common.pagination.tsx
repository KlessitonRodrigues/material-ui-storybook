import { Box } from '@mui/material';

import { Button } from './common.button';
import { Icons } from './common.icon';

interface PaginationProps {
  currentPage?: number;
  lastPage?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { currentPage = 1, lastPage = 1, onPageChange } = props;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 8, alignItems: 'center' }}>
      <Button
        color="primary"
        variant="square"
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icons iconType="caretLeft" iconSize="1rem" />
      </Button>
      <Button color="primary">{currentPage}</Button>
      <Button
        color="primary"
        variant="square"
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        <Icons iconType="caretRight" iconSize="1rem" />
      </Button>
      <Button
        color="primary"
        variant="square"
        onClick={() => onPageChange?.(lastPage)}
        disabled={currentPage === lastPage}
      >
        <Icons iconType="caretLineRight" iconSize="1rem" />
      </Button>
    </Box>
  );
};
