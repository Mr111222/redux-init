import React, { Component } from 'react'
import {Input, Button, List} from 'antd'
import store from '../store'
import * as actionsFn from '../store/actionCreators'
import axios from 'axios'
import TodolistUI from './todolist-ui'
import 'antd/dist/antd.css'
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeVal = this.changeVal.bind(this)
    this.storeChange = this.storeChange.bind(this) 
    this.addFn = this.addFn.bind(this)
    this.delFn = this.delFn.bind(this)
    store.subscribe(this.storeChange) // 订阅模式
  }
  changeVal (e) {
    // 单独抽离之后 import * as actionsFn from '../store/actionCreators'
    const action = actionsFn.changeInpAction(e.target.value)
    // 抽离之前
    // const action = {
    //   type: types.changeInp,
    //   value: e.target.value
    // }
    store.dispatch(action)
  }
  // 订阅模式
  storeChange (){
    this.setState(store.getState())
  }

  addFn () {
    const action = actionsFn.addFnAction()
    store.dispatch(action)
  } 

  delFn (index) {
    const action = actionsFn.delFnAction(index)
    store.dispatch(action)
  }
  // 声明周期函数
  async componentDidMount () {
    let res= await axios.get('/api/all').then(res=>{
      const action = {
        type: 'axiosData',
        data: res.data.data
      }
      store.dispatch(action)
    })
  }


  render() { 
    return ( 
      <div style={{marginLeft:'10px'}}>
        <TodolistUI
          valves={this.state.inputValue}
          list={this.state.list}
          changeVal={this.changeVal}
          addFn={this.addFn}
          delFn={this.delFn}
        ></TodolistUI>  

       {/* <ul>
          {this.state.listSql ? this.state.listSql.map((item,index)=>{
              return(
                  <li key={item.id}>
                      {item.name}--{item.age}    
                  </li>
              )
          }): ''}
        </ul>         */}
       {/*   <Input
          placeholder={this.state.inputValue}
          style={{width:'250px', marginRight:'10px'}}
          onChange={this.changeVal}
          value={this.state.inputValue}
        >
        </Input> 
        <Button type="primary" onClick={this.addFn}>增加</Button>

        <div style={{margin:'10px', width:'300px'}}>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index)=>(<List.Item  onClick={this.delFn.bind(this, index)}>{index+1}.{item}</List.Item>)}
        >

        </List>
        </div>  */}
      </div>
     );
  }
}
 
export default Todolist;