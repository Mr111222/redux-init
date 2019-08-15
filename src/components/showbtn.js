import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow: false,
      val: 'none'
     }
  }
  showFn () {
    this.setState({
      isShow: !this.state.isShow,
      val: this.state.isShow ? 'block' : 'none'
    })
  }
  render() { 
    return ( 
      <div>
        {/* <p style = {{color: this.state.isShow ? 'red' : 'blue', display:this.state.val}}>我是boss级任务-->哈士奇</p> */}
        {/* <p className={this.state.isShow ? 'showp' : 'hidep'}>我是boss级任务-->哈士奇 @keyframes实现</p> */}
        <CSSTransition
          in = {this.state.isShow}
          timeout={2000}
          classNames="p-box"
        >
          <p>我是boss级任务-->哈士奇 @keyframes实现</p>
        </CSSTransition>
        <button onClick={this.showFn.bind(this)}>showBoss</button>
      </div>
     );
  }
}
 
export default Btn;