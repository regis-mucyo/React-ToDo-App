import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const ToDo = () => {
  interface ListToDo {
    id: number;
    todo: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<ListToDo[]>([
    { id: 10, todo: "Learn how to dance in classical", completed: false },
    { id: 11, todo: "Learn how to make bicycle into papers", completed: false },
  ]);

  const handleForm = (formData: FormData) => {
    const todoList = formData.get("todos");
    if (typeof todoList !== "string") return;

    setTodos((prev) => [
      ...prev,
      {
        id: todos.length + 1,
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
    <>
      <section className="grid place-items-center">
        <main>
          <br />
          <h1 className="text-center my-6 text-8xl font-semibold text-gray-300 pb-6 ">
            todos
          </h1>

          <form
            action={handleForm}
            className="relative left-3 md:flex md:flex-row"
          >
            <input
              className="w-82 md:w-140 outline-none shadow shadow-gray-400 rounded-3xl py-2.5 pl-6 pr-14 placeholder:text-gray-600 placeholder:text-sm placeholder:relative placeholder:font-medium placeholder:bottom-0.5"
              placeholder="Add todo..."
              type="text"
              name="todos"
            />

            <button className="relative right-12">
              <FontAwesomeIcon
                icon={faCirclePlus}
                size="lg"
                style={{ color: "rgb(67, 161, 172)" }}
              />
            </button>
          </form>

          <br />

          <section className="relative left-3">
            <ul className="w-82 md:w-138">
              {todos.map((todo) => {
                return (
                  todo.todo !== "" && (
                    <li
                      key={todo.id}
                      className={`text-gray-600 text-lg flex flex-row justify-between my-6.5 
                      ${todo.completed ? "line-through" : "no-underline"}`}
                    >
                      <section className="">
                        {" "}
                        <input
                          className="mr-2 md:mr-3"
                          type="checkbox"
                          name="todoList"
                          value={todo.todo}
                          defaultChecked={todo.completed}
                          onClick={() => {
                            handleCompleted(todo.id);
                          }}
                        />
                        {todo.todo.length === 70
                          ? `${todo.todo}
                        `
                          : todo.todo}
                      </section>

                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="text-sm ml-1 p-1 rounded-2xl"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="lg"
                          style={{ color: "rgb(255, 0, 0)" }}
                        />
                      </button>
                    </li>
                  )
                );
              })}
            </ul>
          </section>
        </main>
      </section>
    </>
  );
};

export default ToDo;
