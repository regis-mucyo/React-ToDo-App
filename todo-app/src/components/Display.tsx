import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
interface ToDo {
  id: number;
  todo: string;
  completed: boolean;
}
interface DisplayProps {
  todos: ToDo[];
  handleForm(formData: FormData): void;
  handleCompleted(id: number): void;
  handleDelete(id: number): void;
}
const Display = ({
  todos,
  handleForm,
  handleCompleted,
  handleDelete,
}: DisplayProps) => {
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
              className="w-82 md:w-140 outline-none shadow shadow-gray-400 rounded-3xl py-2.5 pl-6 pr-14 placeholder:text-gray-600 placeholder:text-sm placeholder:relative placeholder:font-medium placeholder:bottom-0.5 break-all"
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
                  <React.Fragment key={todo.id}>
                    <li
                      className={`text-gray-600 text-lg flex flex-row justify-between  my-3 md:my-2.5 
                        ${todo.completed ? "line-through" : "no-underline"}  min-w-0 break-all`}
                    >
                      <label>
                        {" "}
                        <input
                          className="mr-2 md:mr-3"
                          type="checkbox"
                          name="todoList"
                          value={todo.todo}
                          checked={todo.completed}
                          onChange={() => {
                            handleCompleted(todo.id);
                          }}
                        />
                        {todo.todo}
                      </label>

                      <Button id={todo.id} handleDelete={handleDelete} />
                    </li>
                    <hr className="relative bottom-3 text-gray-300" />
                  </React.Fragment>
                );
              })}
            </ul>
          </section>
        </main>
      </section>
    </>
  );
};
export default Display;
