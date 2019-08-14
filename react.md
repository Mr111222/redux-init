### 使用注意点 redux
  文件目录
  src---
    |-store
    |   |-index.js // 主入口
    |   |-reducer.js // 定义初始化数据,以及当有action提交逻辑时候，修改数据
    |   |-creatAction.js  // action 提交逻辑
    |   |-types.js // 保存action提交的type值
    |-components
    |   |-todolist.js

    
  1.import {createStore, applyMiddleware, compose} from 'redux'  -> npm install redux -S
    createStore // 创建store 
    applyMiddleware  // 加载中间件
    import reducer from './reducer'

    const store = createStore(
      reducer,
      enhancer
    );  
    export default store;
  

  2.use store -> in /components/todolist.js
    import store from '../store'
    class Todolist extends Component {
      constructor(props) {
        super(props);
        this.state = store.getState() // 获取初始数据
        this.storeChange = this.storeChange.bind(this) 
        store.subscribe(this.storeChange) // 订阅模式
      }
      // 订阅模式
      storeChange (){
        this.setState(store.getState())
      }
      addFn () {
        let action = {  // 标准格式, 一般会创建一个createAction.js来写这个位置，然后引入直接调用
          type: 'ADDLIST', // #999 定义好的type值， 之后再reducer中会做判断使用
          val: '增加的数据' // #888 这里作为提交数据 
        }
        store.dispatch(action) // 这里进行提交
      }
      render(){
        return (
          <div>
            <button onClick={this.addFn.bind(this)}>增加</button>
            <ul>
              {this.state.list 
                ? 
                this.state.list.map((item, index)=> <li key={index}>item</li>)
                :
                ''
              }       
            </ul>
          </div> 
        )
      }
    }

  3. use reducer ---> in reducer.js
  const defaultState = {
    list:[]
  }
  export deafult (state = defaultState, action){
    if(action.type === 'ADDLIST'){ // #999 之前定义好的type值
      // reducer 里面只能获取值，但是不能改变值，所以才用深度克隆方式，不改变原有值,但是最后要返回一个新的state
      let newState = JSON.parse(JSON.stringify(state)) 
      newState.list.push(action.val) // #888 为之前提交的数据值
      return newState // 返回一个新的state
    } 
    return state
  }



