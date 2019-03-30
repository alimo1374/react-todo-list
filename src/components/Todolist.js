import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class Tdolist extends Component {
  render() {
    const {items,handleClear,handleEdite,handleDelete}=this.props
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {
          items.map(item=>{
            return(
          <TodoItem
          key={item.id}
          title={item.title}
          handleEdite={()=>handleEdite(item.id)}
          handleDelete={()=>handleDelete(item.id)}
          />
            )
          })
        }

        <button onClick={handleClear} type="button" className="btn btn-danger btn-block text-capitalize mt-5">
          clear list
        </button>
      </ul>
    
    )
  }
}
