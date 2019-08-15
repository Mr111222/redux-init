import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import Todolist from './components/todolist'
import Home from './components/home'

//globe css
import './style/index.styl'
import './style/less.less'
import './style/sass.sass'
import './style/scss.scss'



ReactDOM.render(
  <Router>
    <Home/>
  </Router>  
, document.getElementById('app'));
