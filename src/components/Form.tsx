import { useState } from "react";
interface Props {
  createTodo: (text: string) => void;
}
export const Form = ({ createTodo }: Props) => {
  const [todoText, setTodoText] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (todoText === "") return;
    createTodo(todoText);
    e.currentTarget.reset();
    setTodoText("");
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTodoText(e.currentTarget.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="newTodoText" onChange={handleChange} />
      <br />
      <button type="submit" disabled={!todoText}>
        Create todo
      </button>
    </form>
  );
};
