import React, { Component } from 'react'
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
        <p style = {{color: this.state.isShow ? 'red' : 'blue', display:this.state.val}}>我是boss级任务-->哈士奇</p>
        <button onClick={this.showFn.bind(this)}>showBoss</button>
      </div>
     );
  }
}
 
export default Btn;