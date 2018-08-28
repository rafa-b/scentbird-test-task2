import config from '@eagle/app-config'
import base from './common'
import development from './development'
import production from './production'


const appEnv = config.env || 'development'
let webpackConfig = development(base)

if (appEnv !== 'development') {
  webpackConfig = production(base)
}


export default webpackConfig
