import * as types from './types'
import axios from 'axios';

const changeInpAction = (value)=>({
  type: types.change_Inp,
  value
})
const addFnAction = ()=>({
  type: types.add_List
})
const delFnAction = (index)=>({
  type: types.del_List,
  index
})

// 在这里定义 getListAction #333
const getListAction = (res)=>({
  type: types.get_listAll,
  res
})

// 把axios 封装在creataction文件
const getTodolistAllAction = () =>{
  return (dispatch) => {
    axios.get('/api/redux').then(data=>{
      const action = getListAction(data.data.data)  // 在这里调用getListAction #333
      dispatch(action)
    })
  }
}

const getUlsAction = (data) =>({
  type: types.get_ul,
  data
})

const getUlsAllAction = () => {
  return (dispatch) => {
    axios.get('/api/all').then(res=>{
      const action = getUlsAction(res.data.data)
      dispatch(action)
    })
  }
}


export {
  changeInpAction,
  addFnAction,
  delFnAction,
  getTodolistAllAction,
  getUlsAllAction
}