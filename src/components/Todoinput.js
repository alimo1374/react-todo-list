import React, { Component } from 'react'

export default class Todoinput extends Component {
  render() {
    const {item,handleChange,handleSubmit,editeItem}=this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-info text-dark">
              <i className="fas fa-book"/>
            </div>
          </div>
          <input type="text" 
          className="form-control text-capitalize" 
          placeholder="add a todo item"
          value={item}
          onChange={handleChange}
          />
          </div>
          <button type="submit"
           className={
             editeItem?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"
           }>
           {editeItem?'edit item':'add item'}
           </button>
        </form>
      </div>
    )
  }
}
