/** @type { import('storybook-solidjs-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [// "@storybook/addon-links",
  "@storybook/addon-essentials", "@storybook/addon-interactions", "@chromatic-com/storybook"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
