import { Button } from './common.button';
import { Row } from './common.container.flex';
import { Icons } from './common.icon';
import { Text } from './common.text';

interface PaginationProps {
  currentPage?: number;
  lastPage?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { currentPage = 1, lastPage = 1, onPageChange } = props;

  return (
    <Row flexX="end" gap={2}>
      <Button
        variant="square"
        mode="outline"
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icons iconType="caretLeft" iconSize="1rem" />
      </Button>
      <Button variant="square" color="primary">
        <Text bold>{currentPage}</Text>
      </Button>
      <Button
        variant="square"
        mode="outline"
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        <Icons iconType="caretRight" iconSize="1rem" />
      </Button>
      <Button
        variant="square"
        mode="outline"
        onClick={() => onPageChange?.(currentPage + 5)}
        disabled={currentPage + 5 > lastPage}
      >
        <Icons iconType="skipRight" iconSize="1rem" />
      </Button>
      <Button
        variant="square"
        mode="outline"
        onClick={() => onPageChange?.(lastPage)}
        disabled={currentPage === lastPage}
      >
        <Icons iconType="caretLineRight" iconSize="1rem" />
      </Button>
    </Row>
  );
};
