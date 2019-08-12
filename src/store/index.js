import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const enFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? //增强函数
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):
          compose
const enhancer =  enFn(applyMiddleware(thunk))
const store = createStore(
  reducer,
  enhancer
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),

);

export default store;
