import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [update, setUpdate] = useState({ id: null, status: false });

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodoHandler = async () => {
    if (todo.length === 0) return alert("Please Enter Todo");
    try {
      const todoItem = {
        todo: todo,
        createdAt: Date.now(),
      };
      const docRef = await addDoc(collection(db, "Todos"), todoItem);
      // console.log(docRef.id);
      setTodoList((prev) => {
        return [...prev, { ...todoItem, id: docRef.id }];
      });
      setTodo("");
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = async (id) => {
    await updateDoc(doc(db, "Todos", update.id), { todo: todo });
    let updatedList = todoList.map((item) => {
      if (item.id === update.id) {
        return { ...item, todo: todo };
      }
      return item;
    });
    setTodoList(updatedList);
    setUpdate({ id: null, status: false });
    setTodo("");
  };

  const onDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
    const filderedList = todoList.filter((item) => item.id !== id);
    setTodoList(filderedList);
    // console.log(id, "deleted");
  };

  const onEdit = (id, todo) => {
    setTodo(todo);
    setUpdate({ id: id, status: true });
  };

  const onCancel = () => {
    setTodo("");
    setUpdate({ ...update, status: false });
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Todos"));
    // console.log(querySnapshot.data());
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      setTodoList((prev) => [...prev, { ...doc.data(), id: doc.id }]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="todo-container">
      <TodoHeader
        todo={todo}
        onChange={onChange}
        update={update}
        updateHandler={updateHandler}
        addTodoHandler={addTodoHandler}
        onCancel={onCancel}
      />
      <TodoList todoList={todoList} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default Todo;
