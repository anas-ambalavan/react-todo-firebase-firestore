import React from "react";

function TodoList({ todoList, onDelete, onEdit }) {
  //   console.log(todoList);
  return (
    <div>
      {todoList.length === 0 ? (
        <p>No todos found...</p>
      ) : (
        todoList.map((todoItem, index) => (
          <div key={todoItem.id}>
            <p>{todoItem.todo}</p>

            <button onClick={() => onEdit(todoItem.id, todoItem.todo)}>
              edit
            </button>
            <button onClick={() => onDelete(todoItem.id)}>delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default React.memo(TodoList);
