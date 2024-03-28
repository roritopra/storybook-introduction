/** @type { import('@storybook/html').Preview } */
const customViewports = {
  smallUgly: {
    name: 'small Ugly',
    styles: {
      width: '360px',
      height: '548px',
    },
  },
  mediumUgly: {
    name: 'medium Ugly',
    styles: {
      width: '1024px',
      height: '540px',
    },
  },
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViwport: 'someDefault'
    },
  },
};

export default preview;