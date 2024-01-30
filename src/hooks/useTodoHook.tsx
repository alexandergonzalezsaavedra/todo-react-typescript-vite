import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
// Types
import { TodoType, TodoAction } from "../types/types";

const todosReducer = (
  state: Array<TodoType>,
  action: TodoAction
): Array<TodoType> => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.payload.text,
          date: new Date().toLocaleDateString(),
          isDone: false,
        },
      ];
    case "delete":
      return state.filter((oneTodo) => oneTodo.id !== action.payload.id);
    case "update":
      return state.map((oneTodo) => {
        if (oneTodo.id === action.payload.id) {
          return oneTodo.isDone
            ? { ...oneTodo, isDone: false }
            : { ...oneTodo, isDone: true };
        }
        return oneTodo;
      });
    default:
      return state;
  }
};

const INITIAL_STATE: Array<TodoType> = [];
export const useTodoHook = () => useReducer(todosReducer, INITIAL_STATE);
