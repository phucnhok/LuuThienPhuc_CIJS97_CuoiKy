import React from 'react'

function Active({tasks, completedTasks, handleCheckboxChange}) {
  return (
            <ul>
                {
                    todoApp.map((item) => {
                        return <li key={item.id} style={{textAlign:"left"}}>
                            <input type="checkbox" onChange={() => handleCheckboxChange(item.id)} />
                            <span style={{marginLeft:"20px", textDecoration: completedTasks[item.id] ? "line-through" : "none" }}>{item.task}</span>
                            <button onClick={() => deletetask(item.id)} className='btn btn-primary' style={{ backgroundColor: "red", marginLeft: "20px" }}>Remove</button>
                        </li>
                    })
                }
            </ul>
  )
}

export default Active