const path = require("path")

module.exports = {
  "stories": [
    "../src/components/**/stories.tsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, '..', 'public/assets')
    }

    return config
  }
}
