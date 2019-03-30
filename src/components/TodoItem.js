import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const {id,title,handleDelete,handleEdite}=this.props;
    return (
       <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i onClick={()=>handleEdite(id)} className="fas fa-pen"/>
          </span>
          <span className="mx-2 text-danger">
            <i onClick={()=>handleDelete(id)} className="fas fa-trash"/>
          </span>
        </div>
       </li>
    )
  }
}
