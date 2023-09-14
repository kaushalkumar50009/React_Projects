import React, { useState } from "react";
import TodoItems from "./TodoItems";

const TodoInputs = () => {
  const [data, setData] = useState({
    title: "",
    status: "Pending",
  });
  const [addTask, setAddTask] = useState([]);

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleInputOnClick = () => {
    setAddTask(() => [
      ...addTask,
      {
        title: data.title,
        status: data.status,
      },
    ]);
  };

  return (
    <>
      <input
        type="text"
        name="title"
        id="title"
        value={data.title}
        onChange={(e) => {
          handleInputOnChange(e);
        }}
      />

      <input
        type="text"
        name="status"
        id="status"
        value={data.status}
        onChange={(e) => {
          handleInputOnChange(e);
        }}
      />

      <button
        onClick={() => {
          handleInputOnClick();
        }}
      >
        add task
      </button>

      <TodoItems
        todoData={addTask}
        inputSetState={setData}
        addSetTask={setAddTask}
      />
    </>
  );
};

export default TodoInputs;
