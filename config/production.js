import baseConfig from './default'

export default {
  publicPath: `http://localhost:5100${baseConfig.publicPath}`,

  services: {
    base: 'http://localhost:5100/',
    api: 'http://localhost:5100/',
  },
}
