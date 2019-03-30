import React, { Component } from 'react';
import TodoInput from './components/Todoinput'
import TodoList from './components/Todolist'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';


class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editeItem:false,
  }
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    });
  }
  handleSubmit=(e)=>{
    e.preventDefault();
     const newItem={
       id:this.state.id,
       title:this.state.item
     }
     const updateItem=[...this.state.items,newItem];
     this.setState({
       items:updateItem,
       item:'',
       id:uuid(),
       editeItem:false
     })
  }
  handleClear=()=>{
    this.setState({
      items:[],
    })
  }
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id!==id)
    this.setState({
      items:filteredItems
    })
  }
  handleEdite=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id!==id);
    const selectItem=this.state.items.find(item=>item.id===id);
    
    this.setState({
      item:selectItem.title,
      items:filteredItems,
      editeItem:true,
      id:id
    })
    
  }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item}
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             editeItem={this.state.editeItem}
             />
            <TodoList items={this.state.items}
             handleClear={this.handleClear}
              handleDelete={this.handleDelete}
               handleEdite={this.handleEdite}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
