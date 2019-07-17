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
        this.setState({
        todos:[...this.state.todos,this.state.currentToDo] //to todos array add a spread(...) to the todo state then (,) add in the current todo
      })
      console.log("additem Method fired")
    }

    removeItem = event => {
      const clearStr = this.state.todos.filter((item, index) =>{
      return index !== event.target.index
    });
      this.setState({
        todos: clearStr
      })
      console.log("removeitem Method fired")
      console.log(event)
    }
    

  render () {
    
    var toDoItems = this.state.todos.map((todo,index) => 
    <ul>
      <li key={index}>{todo}</li> 
      <button onClick={this.removeItem}>git rid of it</button>
      </ul>
    );
    
    return (
      <div className='container'>

        <div className='daform'>
          <form onSubmit={this.addItem}>
            <label htmlFor="taskName">Task Name:</label>
            <input 
            onChange={this.handleChange} 
            name="taskName" 
            type="text" 
            placeholder="Add todo here!"/>
            <button onClick={this.addItem} type="submit">Add Task</button>
          </form>
        </div>

        <div>
          <ul>the todo list of Doom: 
            {toDoItems}
          </ul> 
        </div>
        
      </div>
    )
  }
}

export default TodoList;