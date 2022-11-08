const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/stories.mdx', '../src/**/stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: false,
  },
  async viteFinal(config) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts'),
    );

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
};
