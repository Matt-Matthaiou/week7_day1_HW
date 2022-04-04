import React, {useState} from 'react';
import './App.css';

function App() 
{

  const [toDoList, setToDoList] = useState(
    [
      {name:"Cook dinner", priority: false},
      {name: "Clean dishes", priority: true}
    ]);

  const [newTask, setNewTask] = useState()

  const taskList = toDoList.map((task, index) =>
  {
    return(
      <li key={index}>
        <span style={task.priority ? {color:'red'} :{color:'green'}}>{task.name}</span>
      </li>
    )
  });

  const handleInput = (event)=>
  {
    setNewTask(event.target.value);
  }

  const handleForm = (event)=>
  {
    event.preventDefault();
    const copyTasks = toDoList;
    console.log(event.target.priority.value);
    const createdTask = {name: newTask, priority:checkPriority(event.target.priority.value)};
    copyTasks.push(createdTask);
    setNewTask('')
  }

  const checkPriority = (value)=>
  {
    if (value === 'true')
    {
      return true;
    }
    else if (value === 'false')
    {
      return false;
    }
  }

  return (
    <>
      <h1>ToDo's</h1>
      <form onSubmit={handleForm}>
        <label htmlFor='new-to-do'>Add a new task</label>
        <input id='new-to-do' type='text' onChange={handleInput} value={newTask}/>
        <label htmlFor='priority'>Low priority</label>
        <input name='priority' type='radio' value='false'/>
        <label htmlFor='priority'>high priority</label>
        <input name='priority' type='radio' value='true'/>
        <input type='submit' value='Add task'></input>
      </form>
      <ul>
        {taskList}
      </ul>
    </>
  );
}

export default App;
