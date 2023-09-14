import React, { useState } from "react";
import TodoInputs from "./TodoInputs";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <>
      <TodoInputs />
      <TodoList />
    </>
  );
};

export default TodoApp;
