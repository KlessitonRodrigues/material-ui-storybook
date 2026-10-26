import { Box } from '@mui/material';

interface StepBarProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  stepItems: { active: boolean; onClick?: () => void }[];
}

export const StepBar = (props: StepBarProps) => {
  const { className, direction = 'horizontal', stepItems } = props;

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        gap: 8,
        p: 8,
      }}
    >
      {stepItems.map(({ active, onClick }, i) => (
        <Box
          key={i}
          sx={{
            width: direction === 'vertical' ? 4 : 40,
            height: direction === 'vertical' ? 40 : 4,
            backgroundColor: 'var(--color-bg1)',
            opacity: active ? 1 : 0.5,
            cursor: 'pointer',
          }}
          onClick={onClick}
        />
      ))}
    </Box>
  );
};
