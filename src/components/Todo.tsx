import { TodoType } from "../types/types";
interface Props {
  todoList: Array<TodoType>;
  deleteTodo: (id: string) => void;
}
export const Todo = ({ todoList, deleteTodo }: Props) => {
  if (todoList.length === 0) {
    return <h2>No hay nada para ver</h2>;
  }
  return (
    <>
      <ol>
        {todoList.map((todoData) => {
          return (
            <li key={todoData.id}>
              {todoData.text}
              <br />
              <p>{todoData.date}</p>
              <br />
              <small>{todoData.id}</small>
              <hr />
              <button onClick={() => deleteTodo(todoData.id)}>Eliminar</button>
            </li>
          );
        })}
      </ol>
    </>
  );
};
