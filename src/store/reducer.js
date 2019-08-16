import * as types from './types'
const defaultState = {
  inputValue: 'jsut do it',
  listSqls: [{"id":2,"name":"小张","age":20},{"id":3,"name":"小兰","age":28},{"id":4,"name":"小李","age":11},{"id":5,"name":"小刘","age":22},{"id":6,"name":"小孙","age":8},{"id":7,"name":"小屁","age":12},{"id":8,"name":"小王","age":23},{"id":12,"name":"小郑","age":31},{"id":13,"name":"小红","age":10},{"id":14,"name":"郑老屁","age":52},{"id":15,"name":"小吴","age":33},{"id":16,"name":"250","age":31}],
  list:[],
  listSql: []
}
export default (state = defaultState, action)=>{
  // reducer 只能接受state 不能改变state 采用深度拷贝 JSON.parse(JSON.stringify(state))
  if(action.type === types.change_Inp){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === types.add_List){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type ===types.del_List){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  // del listSqls
  if(action.type ===types.del_sql_list){
    let newState = JSON.parse(JSON.stringify(state))
    newState.listSqls.splice(action.index, 1)
    return newState
  }
  // axios 请求回来的数据
  if(action.type === types.get_listAll){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.res
    return newState
  }

  if(action.type === types.get_ul){
    let newState = JSON.parse(JSON.stringify(state))
    newState.listSql = action.data
    return newState
  }
  return state
}