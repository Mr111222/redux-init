import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const C = (props) => {
  const {name, content, list} = props
  return (  
    <div>
      <h2>{name}</h2>
      <p>{content}</p> 
      <ul>
        <TransitionGroup>
          {
            list.map((item, index) => {
              return (
                <CSSTransition
                timeout={1000}
                classNames='p-box'
                unmountOnExit
                onEntered={(el) => {el.style.color='pink'}}
                appear={true}
                key={index}
                >
                  <li key={index}>{item}</li>
                </CSSTransition>
              )
               
            })
          }
        </TransitionGroup>
      </ul>
    </div>
  );
}

// props 校验
C.propTypes = { // 这里的propsTyoes 是小写 否则报错
  name: PropTypes.string.isRequired, // isRequired 为必传项 
  content: PropTypes.string
}

// 设置默认参数
C.defaultProps = {
  name: '我是C页面的默认参数'
}
export default C;