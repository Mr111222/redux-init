import React, { Component } from 'react'
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'

// 无状态组件
const TodolistUI = (props) => {
  return ( 
    <div style={{marginLeft:'10px'}}>
      <Input
        values={props.valves}
        style={{width:'250px', marginRight:'10px'}}
        onChange={props.changeVal}
        value={props.valves}
      >
      </Input>
      <Button type="primary" onClick={props.addFn}>增加</Button>
      <div style={{margin:'10px', width:'300px'}}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index)=>(<List.Item  onClick={ () => {props.delFn(index)}}>{index+1}.{item}</List.Item>)}
          // renderItem={(item, index)=>(<List.Item  onClick={ (index) => {props.delFn(index)}}>{index+1}.{item}</List.Item>)}
          // 这里面不能再传入index 因为会与前面的index产生冲突

        >
        </List>
      </div> 
    </div>
   );
}

// 基本定义组件使用
// class TodolistUI extends Component {
//   render() { 
//     return ( 
//       <div style={{marginLeft:'10px'}}>
//         <Input
//           values={this.props.valves}
//           style={{width:'250px', marginRight:'10px'}}
//           onChange={this.props.changeVal}
//           value={this.props.valves}
//         >
//         </Input> 
//         <Button type="primary" onClick={this.props.addFn}>增加</Button>
//         <div style={{margin:'10px', width:'300px'}}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index)=>(<List.Item  onClick={ () => {this.props.delFn(index)}}>{index+1}.{item}</List.Item>)}
//           >
//           </List>
//         </div> 
//       </div>
//      );
//   }
// }
 
export default TodolistUI;