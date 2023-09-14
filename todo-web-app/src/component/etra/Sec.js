import React, { useState} from 'react'
import First from './First'
import "../../css/extraCss/Sec.css"
import { todoSchema, setSchemaError } from "./errorSchema/Validation"

const Sec = () => {
    const [input, setInput] = useState("")
    const [status, setStatus] = useState("pending")
    const [task, setTask] = useState([])
    const [error, setError] = useState({})

    const addTask = async () => {
        try {
            // Validate the input using the schema
            await todoSchema.validate({ title: input }, { abortEarly: false });
            setError({}); // Clear any previous validation errors

            // Create a new task object
            const newTask = {
                status: status,
                title: input
            };

            // Update the task state by adding the new task
            setTask([...task, newTask]);

            setInput(""); // Reset the input field after adding task to list
        } catch (validationError) {
            // Handle validation errors and set error state
            setSchemaError(validationError, setError);
        }
    };

    const updateStatus = (index) => {
        const updatedData = [...task]; // Create a copy of the data array
        const updateTask = updatedData.find((task, indx) => indx === index - 1);
        if (updateTask) {
            // Toggle status between "pending" and "completed"
            updateTask.status = updateTask.status === "pending" ? "completed" : "pending";
            setTask(updatedData); // Update the task state
        }
    };

    const removeTask = (index) => {
        const removeTask = [...task]; // Create a copy of the task array
        // Filter out the task to be removed based on index
        const taskDeleted = removeTask.filter((item, indx) => indx !== index - 1);
        setTask(taskDeleted); // Update the task state
    };



    return (
        <>
            <div className="complete_box">
                <div className="add-input_container">
                    <div className="add_task_input">
                        <div className="input">
                            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} onInput={() => { setError({}) }} />
                        </div>
                        <div className="add_button">
                            <button className='add_btn' onClick={() => { addTask() }}>add task</button>
                        </div>
                    </div>
                    <div className="show_error">
                        {error.title && (<div>{error.title}</div>)}
                    </div>
                </div>
                <div className="main_body">
                    <div className="todo_list">
                        <h1 className="list">
                            Todo List
                        </h1>
                    </div>
                    <div className='cards_container'>
                        {
                            task.map((item, index) => (
                                <div className="" key={index}>
                                    <First data={item} indx={index + 1} setTask={setTask} updateStatus={updateStatus} removeTask={removeTask} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sec



//! different way to update
// const updateStatus = (index) => {
//     const updatedTasks = [...task];
//     const taskToUpdate = updatedTasks[index-1];
//     taskToUpdate.status = taskToUpdate.status === "pending" ? "completed" : "pending";
//     setTask(updatedTasks);

// };

//! error can be also perform like this
// {/* <div className="main_body">
// {error.title ? (<div className="show_error">
//     {error.title}</div>) :
//     <div className='cards_container'>
//         {
//             task.map((item, index) => (
//                 <div className="" key={index}>
//                     <First data={item} indx={index + 1} setTask={setTask} updateStatus={updateStatus} removeTask={removeTask} />
//                 </div>
//             ))
//         }
//     </div>
// }
// </div> */}

//! can be also use like this
// setTask((prev) => (
//     [...prev, newTask]
// ));

// //! Clear the error state when input changes or you can use onInput={() => { setError({}) }} this also in where your input field is
// useEffect(() => {
//     setError({});
// }, [input]);