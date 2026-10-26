import type { Preview } from '@storybook/nextjs-vite';

// @ts-expect-error
import '../src/global.css';

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
};

export default preview;
