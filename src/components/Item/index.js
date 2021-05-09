import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    state = {mouseEnter:false}//鼠标是否移入

    //参数限制
    static PropTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    //鼠标移入移出改变mouseEnter
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouseEnter:flag})
        }
    }

    //处理勾选事件
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //处理删除事件
    handleDelete = (id)=>{
        return ()=>{
            if(window.confirm('你确定删除吗？')){
                this.props.deleteTodo(id)
            } 
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouseEnter} = this.state
        return (
            <div style={{backgroundColor:mouseEnter?'#ddd':'white'}} 
            className='item' onMouseEnter={this.handleMouse(true)} 
            onMouseLeave={this.handleMouse(false)}>  
                <input type='checkBox' checked={done} onChange={this.handleCheck(id)} />
                <span className='item-name'>{name}</span><br/>
                <button className='item-delete-btn' style={{display:mouseEnter?'block':'none'}} onClick={this.handleDelete(id)}>删除</button>
            </div>
        )
    }
}
