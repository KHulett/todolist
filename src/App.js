import React, {Component} from 'react';

class TodoList extends Component{
  constructor(props) {
    super(props);
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
        todos: [...this.state.todos,this.state.currentToDo]
      })
      console.log("additem Method fired")
    }
    

  render () {
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
            {/* value={this.currentToDo}/> */}
            <button type="submit">Add Task</button>
          </form>
        </div>

        <div>
          <ul>the todo list is: 
            <li>{this.state.todos}</li>
          </ul> 
        </div>
        
      </div>
    )
  }
}

export default TodoList;