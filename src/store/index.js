import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const enFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? //增强函数
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):
          compose
const enhancer =  enFn(applyMiddleware(thunk))


// 配置redux-sags 属于开发者调试工具依赖包
// import createSageMiddleware from 'redux-saga'
// import mySaga from './sagas'
// const sagaMiddleware = createSageMiddleware() 
// const enhancer =  enFn(applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(mySaga)

const store = createStore(
  reducer,
  enhancer
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),

);

export default store;
