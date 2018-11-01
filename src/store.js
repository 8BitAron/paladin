import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const history = createBrowserHistory(),
    initialState = {},
    enhancers = [],
    logger = createLogger({
        collapsed: true
    }),
    middleware = [thunk, routerMiddleware(history), logger]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension)
    }
}

const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    ),
    store = createStore(connectRouter(history)(reducers), initialState, composedEnhancers)

export { store, history }
