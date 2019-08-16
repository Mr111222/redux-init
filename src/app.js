import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './appRouter'
import store from './store'

//globe css
import './style/index.styl'
import './style/scss.scss'
import './style/showBtn.scss'

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(
  App
, document.getElementById('app'));
