import { useState, useRef } from "react";
import Display from "./Display";
interface ListToDo {
  id: number;
  todo: string;
  completed: boolean;
}

const ToDo = () => {
  const [todos, setTodos] = useState<ListToDo[]>([]);
  const uniqueId = useRef(0);
  const handleForm = (formData: FormData) => {
    const todoList = formData.get("todos");
    if (typeof todoList !== "string" || todoList.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: uniqueId.current++,
        todo: todoList,
        completed: false,
      },
    ]);
  };

  const handleCompleted = (id: number) => {
    const result = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(result);
  };

  const handleDelete = (id: number) => {
    const remove = todos.filter((todo) => todo.id !== id);
    setTodos(remove);
  };
  return (
    <Display
      todos={todos}
      handleForm={handleForm}
      handleCompleted={handleCompleted}
      handleDelete={handleDelete}
    />
  );
};

export default ToDo;
