import "./App.css";
// Components
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";
// Hook
import { useTodoHook } from "./hooks/useTodoHook";
function App() {
  const [todos, dispatch] = useTodoHook();
  const createTodo = (newTodoText: string): void => {
    dispatch({
      type: "add",
      payload: {
        text: newTodoText,
      },
    });
  };
  return (
    <>
      <h2>Todo list</h2>
      <Form createTodo={createTodo} />
      <Todo todoList={todos} />
    </>
  );
}
export default App;
