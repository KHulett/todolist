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
        this.setState({
        todos:[...this.state.todos,this.state.currentToDo]
      })
      console.log("additem Method fired")
    }

    removeItem = event => {
      let newArr = this.state.todos.indexOf(event.target.value)
      if (newArr !== -1){
        this.state.todos.splice(newArr, 1)
      }
      this.setState({
        todos: this.state.todos,
      })
      console.log("removeitem Method fired")
    }
    

  render () {
    
    const toDoItems = this.state.todos.map((todo,index) =><div> <li>{todo}</li> <button onClick={this.removeItem}>git rid of it</button></div>)
    
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