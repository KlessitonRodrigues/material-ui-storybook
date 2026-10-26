import { Alert as MuiAlert } from '@mui/material';

interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}

export const Alert = (props: AlertProps) => {
  const { className, children, ...alertProps } = props;

  return (
    <MuiAlert
      className={className}
      severity="info"
      {...(alertProps as object)}
      sx={{ fontSize: '1rem', gap: 8 }}
    >
      {children || <span>12 unread messages. Tap to see.</span>}
    </MuiAlert>
  );
};
