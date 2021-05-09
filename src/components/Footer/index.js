import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    // 参数限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAll: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired
    }

    // 全选与全部反选
    handleCheckAll = (event)=>{
        this.props.checkAll(event.target.checked)
    }

    // 清除已勾选
    handleClearAll = ()=>{
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        const total = todos.length//计算todo总数
        const finished = todos.reduce((prev, todo)=>{
            return prev + (todo.done?1:0)
        }, 0)//计算已完成todo数

        return (
            <div className='footer'>
                <input type='checkBox' checked={finished===total && total!==0} onChange={this.handleCheckAll} />
                <label>已完成 {finished}/全部 {total}</label>
                <button className='footer-btn' onClick={this.handleClearAll}>清除已完成任务</button>
            </div>
        )
    }
}
