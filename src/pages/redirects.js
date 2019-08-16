import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
class RedirectCom extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <p>router重定向使用---->重定向到home组件</p>
        <Redirect to="/home" />
      </div>
    );
  }
}
 
export default RedirectCom;