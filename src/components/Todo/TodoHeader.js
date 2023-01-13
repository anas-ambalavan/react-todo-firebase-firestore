import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { CiFloppyDisk } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

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
      <div className="todo-input-container">
        <input
          className="todo-input"
          name="todo"
          value={todo}
          onChange={onChange}
          placeholder="Enter todo item"
        />
        {update.status ? (
          <>
            <CiFloppyDisk onClick={updateHandler} size={24} />
            <MdCancel onClick={onCancel} size={24} />
          </>
        ) : (
          <BsFillPlusCircleFill onClick={addTodoHandler} size={24} />
        )}
      </div>
    </>
  );
}

export default TodoHeader;
