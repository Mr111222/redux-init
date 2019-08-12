import * as types from './types'
const defaultState = {
  inputValue: 'jsut do it',
  listSql: null,
  list:[
    '早晨上班打卡',
    '中午吃饭休息',
    '下午下班回家',
    '回家堵车中......'
  ]
}
export default (state = defaultState, action)=>{
  // reducer 只能接受state 不能改变state 采用深度拷贝 JSON.parse(JSON.stringify(state))
  if(action.type === types.change_Inp){
    console.log(12)
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
  if(action.type === 'axiosData'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.listSql = action.data
    return newState
  }
  return state
}