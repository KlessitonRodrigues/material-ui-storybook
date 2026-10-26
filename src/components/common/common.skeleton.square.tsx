import { Skeleton as MuiSkeleton } from '@mui/material';

interface SquareSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

export const SquareSkeleton = (props: SquareSkeletonProps) => {
  const { className, show, children, ...skeletonProps } = props;

  if (!show) return <>{children}</>;

  return (
    <MuiSkeleton
      component="div"
      className={className}
      variant="rectangular"
      width="100%"
      height={160}
      {...skeletonProps}
    />
  );
};
