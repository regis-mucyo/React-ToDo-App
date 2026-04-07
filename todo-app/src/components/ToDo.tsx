import { useState } from "react";
const ToDo = () => {
  interface ListToDo {
    id: number;
    todo: string;
    completed: boolean;
  }
  const [todos, setTodos] = useState<ListToDo[]>([]);
  const [done, setDone] = useState(false);
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
    setDone(false);
  };
  const handleCompleted = (id: number) => {
    if (id) {
      setDone((prev) => !prev);
    } else {
      setDone(false);
    }
  };
  console.log(done);
  return (
    <>
      <section className="grid place-items-center">
        <main>
          <br />
          <h1 className="text-center my-6">Todo App</h1>
          <form action={handleForm}>
            <input className="border" type="text" name="todos" />
            <button className="bg-amber-500 p-1.5 relative left-2.5">
              Add Todo
            </button>
          </form>{" "}
          <br />
          <section>
            <ul>
              {todos.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    // className={todo.completed ? "line-through" : "no-underline"}
                  >
                    <input
                      type="checkbox"
                      name="todoList"
                      value={todo.todo}
                      defaultChecked={todo.completed}
                      onClick={() => {
                        handleCompleted(todo.id);
                      }}
                    />
                    {todo.todo}
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
      </section>
      <section></section>
    </>
  );
};
export default ToDo;
