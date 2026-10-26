import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#3b82f6', dark: '#1e40af', contrastText: '#ffffff' },
    secondary: { main: '#1565c0' },
    success: { main: '#2e7d32' },
    warning: { main: '#ca8a04' },
    error: { main: '#c62828' },
    info: { main: '#1565c0' },
    background: { default: '#e5e7eb', paper: '#ffffff' },
    text: { primary: '#1f2937', secondary: '#6b7280' },
  },
  typography: {
    fontFamily: 'Rubik, sans-serif',
    button: { textTransform: 'none' },
  },
  shape: { borderRadius: 6 },
  spacing: 4,
});
