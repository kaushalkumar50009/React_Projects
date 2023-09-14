import React from "react";
import TodoList from "./TodoList";

const TodoItems = (props) => {
  const { todoData, inputSetState, addSetTask } = props;

  const updateStatus = (index) => {
    const updatedData = [...todoData]; // Create a copy of the data array
    const updateTask = updatedData.find((task, indx) => indx === index);
    if (updateTask) {
      updateTask.status =
        updateTask.status === "Pending" ? "completed" : "Pending"; // Update status directly
      // Update the state in the parent component
      inputSetState(updatedData);
    }
  };

  const removeTodoTask = (index) => {
    const removeTask = todoData.filter((task, indx) => indx !== index);
    console.log(removeTask);

    addSetTask(removeTask);
  };

  return (
    <>
      {todoData.map((items, index) => (
        <h3 key={index}>
          <TodoList todos={items} index={index} />
          {/* Add an event handler to change task status */}
          <button
            onClick={() => {
              updateStatus(index);
            }}
          >
            updatae statsu
          </button>

          <button
            onClick={() => {
              removeTodoTask(index);
            }}
          >
            Remove Todo Task
          </button>
        </h3>
      ))}
    </>
  );
};

export default TodoItems;
