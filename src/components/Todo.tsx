import { TodoType } from "../types/types";
interface Props {
  todoList: Array<TodoType>;
}
export const Todo = ({ todoList }: Props) => {
  return (
    <ol>
      {todoList.map((todoData) => {
        return (
          <li key={todoData.id}>
            {todoData.text}
            <br />
            <p>{todoData.date}</p>
            <hr />
          </li>
        );
      })}
    </ol>
  );
};
