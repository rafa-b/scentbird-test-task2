import { createStore, compose, applyMiddleware } from 'redux'
import reducers from 'redux/reducers'


const store = createStore(
  reducers,
  compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)


export default store
