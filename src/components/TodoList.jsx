import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // function to handle form submission event
  const handleSubmit = event => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, { text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  // function to handle task completion event
  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  

  // function to handle task deletion event
  const handleDelete = index => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className='to-do-container'>
      
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{flex: 1, height: 0}} />
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <h2 className="header"> &nbsp;&nbsp;To-Do List:&nbsp;&nbsp; </h2>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
        <div style={{flex: 1, height: 0}} />

      </div>

      <form onSubmit={handleSubmit}>
        <input className="input-task-box" type="text" value={newTask} onChange={event => setNewTask(event.target.value)} />
        <button className="task-button" type="submit">+</button>
      </form>
      <div className="task-list-container">
        {tasks.length > 0 && (
          <ul className="task-list" style={{ listStyleType: 'none', border: '1px solid black', padding: '10px', borderRadius: '5px', textAlign: 'left' }}>
            {tasks.map((task, index) => (
              <li 
                key={index} 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="list-item"
              >
                <input className="check-box" type="checkbox" checked={task.completed} onClick={() => handleComplete(index)} />
                <span>{task.text}</span>

                {hoveredIndex === index && (
                  <button className="delete-button" onClick={() => handleDelete(index)}>delete</button>
                )}

                {index !== (tasks.length - 1) && <hr className="hr-task" />}

              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default TodoList;
