import React, { Component } from 'react'
import C from './c'
class B extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '我是C页面',
      content: '我是C页面,内容来自父组件B',
      list:['起床','吃早饭','午饭','休息', '下午开始工作', '下班'],
      vals: ''
     }
  }

  render() { 
    console.log(`3组件挂载中------>render`)
    return (  
      <div>
        <h2>我是B页面</h2> 
        <input value = {this.state.vals} onChange = {this.changeFn.bind(this)}/><button onClick={this.addFn.bind(this)}>添加</button>
        <C  content={this.state.content} list={this.state.list}/> 
        <div>
          <p><b>测试ref</b></p>
          {/* ref用法  */}
          <input ref={(input)=>{this.input = input}} onChange = {this.refInputFn.bind(this)}/> <br />
          <span ref={(span1)=>{this.pps = span1}}>我是span</span> <button onClick={this.getHtml.bind(this)}>ref获取html</button>
        </div>
      </div>
    );
  }
  getHtml () {
    console.log(this.pps.innerHTML)
  }
  refInputFn () {
    console.log(this.input.value, 'ref')
  }
  changeFn (e) {
    this.setState({
      vals: e.target.value
    })
  }
  addFn () {
    // 这是异步操作有执行时间
    this.setState({
      list:[...this.state.list, this.state.vals], // 推荐使用ES6
      vals: ''
    }, ()=>{
      console.log(this.state.list.length, 'length') // 使用这个方式来进行处理
    })
    // console.log(this.state.list.length, 'length')  在这里打印会返回不准确的length,因为setState是异步操作，还没执行完毕就执行了console
  }
}

 
export default B;