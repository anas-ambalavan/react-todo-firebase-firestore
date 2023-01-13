import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";

function TodoList({ todoList, onDelete, onEdit }) {
  //   console.log(todoList);
  return (
    <div className="todo-list-container">
      <center>
        {todoList.length === 0 ? (
          <p>No todos found...</p>
        ) : (
          todoList.map((todoItem, index) => (
            <div key={todoItem.id} className="todo-item-container">
              <p className="todo-item">{todoItem.todo}</p>
              <div className="todo-actions">
                <BsPencil onClick={() => onEdit(todoItem.id, todoItem.todo)} />
                <BsTrash onClick={() => onDelete(todoItem.id)} />
              </div>
            </div>
          ))
        )}
      </center>
    </div>
  );
}

export default React.memo(TodoList);
