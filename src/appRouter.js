import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages'
import List from './pages/list'
import Todolist from './components/todolist'
import Home from './pages/home'
import RedirectCom from './pages/redirects'

// 设置值，接收值
const appRouter = () => {
  return (
    <Router>
      <ul className="router-uls">
        <li><Link to="/">主页</Link></li>
        <li><Link to="/list/12">列表</Link></li>
        <li><Link to="/todolist">todolist</Link></li>
        <li><Link to="/redirect">重定向</Link></li>
      </ul> 
      <Route path="/" exact  component={Index}></Route> 
      <Route path="/list/:id"  component={List}></Route> 
      <Route path="/todolist"  component={Todolist}></Route>
      <Route path="/redirect"  component={RedirectCom}></Route> 
      <Route path="/home"  component={Home}></Route> 
    </Router>
  )
}

export default appRouter