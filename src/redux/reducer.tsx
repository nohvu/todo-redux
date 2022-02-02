import { IState, IAction } from "../interfaces/IReducer";

export const reducer = (state: IState[], action: IAction) => {
  if (action.type === "ADD_TASK") {
    const newTask = {
      id: state.length + 1,
      text: action.text,
      completed: action.status,
    };
    return [...state, newTask];
  }
  if (action.type === "HANDLE_COMPLETED") {
    state.map((elem) => {
      if (elem.id === action.id) {
        elem.completed = !elem.completed;
      }
    });
    return [...state];
  }

  if (action.type === "HANDLE_REMOVE") {
    return state.filter((elem) => elem.id !== action.id);
  }

  if (action.type === "CHECKED_ALL") {
    state.map((elem) => {
      if (action.isAllChecked) {
        elem.completed = true;
      } else {
        elem.completed = false;
      }
    });
    return [...state];
  }

  if (action.type === "REMOVE_ALL") {
    return state.filter((elem) => elem.completed === false);
  }

  return state;
};
