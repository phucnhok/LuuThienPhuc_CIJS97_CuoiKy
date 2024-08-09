// components/Completed.js
import React from 'react';

const Completed = ({ todoApp, handleCheckboxChange, completedTasks, deletetask }) => {
  return (
    <ul>
      {todoApp.filter(item => completedTasks[item.id]).map((item) => (
        <li key={item.id} style={{ textAlign: "left" }}>
          <input type="checkbox" onChange={() => handleCheckboxChange(item.id)} checked={completedTasks[item.id] || false} />
          <span style={{ marginLeft: "20px", textDecoration: "line-through" }}>{item.task}</span>
          <button onClick={() => deletetask(item.id)} className='btn btn-primary' style={{ backgroundColor: "red", marginLeft: "20px" }}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default Completed;
