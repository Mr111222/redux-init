import * as types from './types'

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

// const getListActions = (res)=>({
//   type: 'axiosData',
//   res
// })
export {
  changeInpAction,
  addFnAction,
  delFnAction,
  // getListActions
}