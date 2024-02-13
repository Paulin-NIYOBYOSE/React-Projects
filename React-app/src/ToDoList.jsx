import React, { useState } from "react";
function ToDoList() {

    const [tasks, setTasks] = useState(["Eat BreakFast", "Taka a shower", "Walker the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);


    }
    function addTask() {
        if(newTask.trim() !==""){
            setTasks([...tasks, newTask]);
        setNewTask("")
        }

    }
    function deleteTask(index) {
        const upDatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(upDatedTasks);

    }
    function moveTaskUp(index) {
      if(index > 0){
        const upDatedTasks = [...tasks];
        [upDatedTasks[index], upDatedTasks[index-1]]= 
        [upDatedTasks[index - 1], upDatedTasks[index]]
        setTasks(upDatedTasks);
      }

    }
    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const upDatedTasks = [...tasks];
            [upDatedTasks[index], upDatedTasks[index + 1]]= 
            [upDatedTasks[index + 1], upDatedTasks[index]]
            setTasks(upDatedTasks);
          }

    }


    return (
        <>
            <div className="to-do-list">
                <h1>To-Do_List</h1>
                <div>
                    <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} required />
                    <button className="add-button" onClick={addTask}>Add</button>
                </div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text"> {task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskUp(index)}>
                             UP
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskDown(index)}>
                             DOWN</button>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );

}
export default ToDoList;