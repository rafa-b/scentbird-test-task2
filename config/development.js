import baseConfig from './default'

export default {
  publicPath: `http://localhost:${baseConfig.http.port}/`,

  services: {
    base: 'http://localhost:5100/',
    api: 'http://localhost:5100/',
  },
}
