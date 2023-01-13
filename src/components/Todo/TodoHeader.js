import React from "react";

function TodoHeader({
  todo,
  onChange,
  update,
  updateHandler,
  addTodoHandler,
  onCancel,
}) {
  return (
    <>
      <h1>Todos</h1>
      <div className="todo-input">
        <input
          name="todo"
          value={todo}
          onChange={onChange}
          placeholder="Enter todo item"
        />
        <button onClick={update.status ? updateHandler : addTodoHandler}>
          {update.status ? "Update Todo" : "Add todo"}
        </button>
        {update.status ? <button onClick={onCancel}>Cancel</button> : null}
      </div>
    </>
  );
}

export default TodoHeader;
