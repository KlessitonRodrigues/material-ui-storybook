import { Box } from '@mui/material';

type IForm = React.HTMLAttributes<HTMLFormElement>;

export const Form = ({ className, ...props }: IForm) => {
  return (
    <Box
      component="form"
      className={className}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 16,
      }}
      {...props}
    />
  );
};
