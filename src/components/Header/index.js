import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

    //参数限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }


    // 按下回车键添加todo
    handleKeyup = (event)=>{
        const {keyCode, target} = event
        if(keyCode!==13){
            return
        }
        if(target.value.trim()===''){
            alert('输入的内容不能为空！')
            return
        }
        const todoObj = {id: nanoid(), name: target.value, done: false}
        this.props.addTodo(todoObj)
        target.value = ''//清空输入框的内容
    }

    render() {
        return (
            <div className='header'>
                <input onKeyUp={this.handleKeyup} className='header-input' placeholder='请输入你的任务名称，按回车键展示'/>
            </div>
        )
    }
}
