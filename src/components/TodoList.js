import React from "react";

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
                <button onClick={() => onEdit(todoItem.id, todoItem.todo)}>
                  edit
                </button>
                <button onClick={() => onDelete(todoItem.id)}>delete</button>
              </div>
            </div>
          ))
        )}
      </center>
    </div>
  );
}

export default React.memo(TodoList);
