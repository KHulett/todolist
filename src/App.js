import React, {Component} from 'react';

class TodoList extends Component{
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo:"",
    }
  }

  handleChange = event => {
    console.log(event.target.value);
    
    this.setState({
      currentToDo: event.target.value
    })
    }
  

  addItem = event => {
    event.preventDefault();
    // add a conditional to only fire if currentToDo has valid info and is not empty!
    if (this.state.currentToDo !== ""){
      this.setState({
        todos:[...this.state.todos,this.state.currentToDo],//to todos array add a spread(...) to the todo state then (,) add in the current todo
        currentToDo:"" 
      })
      }
      else{this.setState({
        currentToDo:""
      })}
        
      console.log("additem Method fired")
    }

    removeItem = indexToDelete => {
      const clearStr = this.state.todos.filter((todo,index) =>
        index !== indexToDelete
      );
      this.setState({
        todos: clearStr
      })
      console.log("removeitem Method fired")
    }
    

  render () {
    
    // var toDoItems = 
    
    return (
      // This div contains the entire App
      <div className='container'>

        {/* This div is the form where our user input field is located and a button which adds a string "currentToDo"
        to the array[todos] */}
        <div className='daform'>
          <form onSubmit={this.addItem}>
            <label htmlFor="taskName">Task Name:</label>
            <input 
            onChange={this.handleChange} 
            name="taskName" 
            type="text" 
            placeholder="Add todo here!"
            value= {this.state.currentToDo}/>

            <button onClick={this.addItem} type="submit">Add Task</button>
          </form>
        </div>

       {/* this div is the unordered list for the strings"currentToDo" that are being added to the array[todos]
       which includes a map function to search through the array for an element and it's index. It also
       includes a button that renders everytime a string is added to the array with an index attached to it
       through an anonymous function ()=> so that the list item can be deleted according to it's index  */}
        <div>
          {this.state.todos.map((todo,index) => 
          <ul>
            <li key={index}>{todo}</li> 
            <button onClick={()=>this.removeItem(index)}>git rid of it</button>
          </ul>
          )}
        </div>
        
      </div>
    )
  }
}

export default TodoList;