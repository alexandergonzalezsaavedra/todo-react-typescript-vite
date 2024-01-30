import "./App.css";
// Components
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";
// Hook
import { useTodoHook } from "./hooks/useTodoHook";
function App() {
  const [todos, dispatch] = useTodoHook();
  const createTodoHandler = (newTodoText: string): void => {
    dispatch({
      type: "add",
      payload: {
        text: newTodoText,
      },
    });
  };
  const deleteTodoHandler = (id: string): void => {
    dispatch({
      type: "delete",
      payload: {
        id,
      },
    });
  };
  return (
    <>
      <h2>Todo list</h2>
      <Form createTodo={createTodoHandler} />
      <Todo todoList={todos} deleteTodo={deleteTodoHandler} />
    </>
  );
}
export default App;
