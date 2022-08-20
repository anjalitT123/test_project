import React from 'react'
import { useState } from 'react';

const AddTask = ({handleAddTask, setList, lists, task}) => {
  const [newTask, setNewTask] = useState('');

  const handleInput= (e) =>{
    setNewTask(e.target.value);
  }

  const handleSubmit= (e) =>{
    e.preventDefault();
    if(newTask !==""){
      setList([...lists,{id:lists.length +1, task: newTask.trim()}
      ]);
      console.log(lists);
    }
    // if (!newTask) return;
    //handleAddTask(newTask);
    //setNewTask("");
    console.log(newTask);
   
  }
  return (
    <div>
           <form onSubmit={handleSubmit}> 
              <input type='text' name='newTask' value={newTask} required placeholder='Add Task Here' onChange={handleInput} />
              <button type='submit' onClick={() => handleAddTask()}> Add Task </button>
            </form>
    </div>
  )
}

export default AddTask;