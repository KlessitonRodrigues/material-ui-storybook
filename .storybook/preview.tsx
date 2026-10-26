import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Preview } from '@storybook/nextjs-vite';

// @ts-expect-error
import '../src/global.css';
import { theme } from '../src/theme/theme';

const preview: Preview = {
  tags: ['autodocs'],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
