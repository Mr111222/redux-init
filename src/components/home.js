import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'
import Todolist from './todolist'
import B from './b'
import Btn from './showbtn'
 
class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  render() {
      return (
          <div>
              <Link to="/todolist">todolist</Link>
              <Link to="/bbbbb">bbbbb</Link>
              <Link to="/btn">btn</Link>

              <Route exact path="/" component={Todolist}/>
              <Route path="/todolist" component={Todolist}/>
              <Route path="/bbbbb" component={B}/>
              <Route path="/btn" component={Btn}/>
          </div>
      )
  }
}

export default Home