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


### 使用注意点 propTypes
    import PropTypes from 'prop-types'
    class C extends Component {
      render(){
        return (
          <div>
            <p>{name}</p> 
          </div>
        )
      }
    }
    // props 数据类型检测
    C.propTypes = {
      name: PropTypes.string.isRequired // string 指定类型  isRequired 必输项
    }
    // 设置默认参数
    C.defaultProps = {
      name: 'I am test html'
    }
    export default C

### 使用注意点 ref

class A extends Component {
  render() {
    return (
      <div>
        <input ref = {(input)=>{this.input = input}}/>
        <p ref = {(p1) => {this.p = p1}}></p>
        {/*<p ref = {(p1) =>  {this.p = p1}}></p>*/}
        {/*         p1可自定义       p可自定义与后面获取元素时一致就行             */}
        <button onClick={this.getHtmlVal.bind(this)}>getHtml</button>
      </div>
    )
  }
  getHtmlVal(){
    console.log(this.input.value, this.p.innerHTML) // 注意点 ----> this.p.innerHTML 并不是this.p1.innerHTML
  }
}

### 声明周期函数介绍
  componentWillMount () {
    console.log(`组件挂载之前---->componentWillMount`);
  }
  componentDidMount(){
    console.log(`组件挂载完毕----->componentDidMount`);
  }
  shouldComponentUpdate (nextProps, nextState) { // 优化组件更新性能
    console.log(`1组件更新之前执行 必须返回布尔值----->shouldComponentUpdate`)
    if(nextPorps.content !== this.props.content){
      return true
    }else{
      return false 
    }
    return true // 若此处返回值为false 则不继续往下执行
  }
  componentWillUpdate () {
    console.log(`2组件更新之前执行 必须返回布尔值----->componentWillUpdate`)
  }
  componentDidUpdate () {
    console.log(`4组件更新之前执行 必须返回布尔值----->componentDidUpdate`)
  }
  render() { 
    console.log(`3组件挂载中------>render`)
    return (
      <div></div>
    )
  }

  // 组件第一存在于dom中，函数不会执行
  // 如果dom中已经存在，函数才会执行
  componentWillReceiveProps() {

  }



  // 组件性能优化
    shouldComponentUpdate (nextProps, nextState) { // 优化组件更新性能
      console.log(`1组件更新之前执行 必须返回布尔值----->shouldComponentUpdate`)
      if(nextPorps.content !== this.props.content){ 
        return true
      }else{
        return false 
      }
      return true // 若此处返回值为false 则不继续往下执行
  }








