import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"

function All({}) {
    const [todoApp, settodoApp] = useState([]);
    const [taskName, settaskName] = useState("");
    const [completedTasks, setCompletedTasks] = useState({});

    const InputTaskChange = (event) => {
        settaskName(event.target.value);
    }

    const addtodoApp = () => {
        settodoApp(pre => [...pre, 
            {id: uuidv4(),
            task: taskName}
        ]);
        settaskName("");
    }

    const handleCheckboxChange = (id) => {
        setCompletedTasks(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const deletetask = (taskId) => {
        const todoAppTemp = todoApp.filter(task => task.id != taskId);
        settodoApp(todoAppTemp);
    }

    const deleteAlltask = () => {
        settodoApp([]);
    }


    return (

        <div>
            <div class="input-group mb-3" style={{ marginTop: "20px" }}>
                <input onChange={InputTaskChange} onKeyDown={(e)=> {if (e.key === "Enter") {addtodoApp()}}} type="text" class="form-control" placeholder="Add new details" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                <button onClick={addtodoApp}  class="btn btn-primary" type="button" id="button-addon2" >Button</button>
            </div>
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

            <button onClick={() => deleteAlltask()} className='btn btn-primary' style={{ backgroundColor: "red" }}>Delete All</button>
            
        </div>
    )
}

export default All