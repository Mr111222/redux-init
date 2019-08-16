import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as types from '../store/types'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount () {
    let ids = this.props.match.params.id  // 获取路由传递的参数
    this.setState({ids})
  }
  render() { 
    const {listSqls, delFn}  = this.props
    return ( 
          <div>
            <p>测试主页面list页面---->接收参数为{this.state.ids}</p>
            <p>下面为通过react-redux来获取的数据</p>
            <table border="1">
              <thead>
                <tr>
                  <td>Id</td>
                  <td>姓名</td>
                  <td>年龄</td>
                  <td>操作</td>
                </tr>
              </thead>
              <tbody>
                {listSqls.map((item, index) =>{
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}岁</td>
                      <td onClick={()=>{delFn(index)}}>删除</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        );
  }
}
const stateToProps = (state) => {
  return {
    listSqls: state.listSqls
  }
}
const dispatchToProps = (dispatch) => {
  return {
    delFn (index) {
      let action = {
        type: types.del_sql_list,
        index
      }
      dispatch(action)
    }
  }
}

 
// export default Index;
export default connect(stateToProps , dispatchToProps)(Index);