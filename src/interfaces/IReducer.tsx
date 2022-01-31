export interface IState {
  id: number;
  text: string;
  completed: boolean;
}
enum ActionKind {
  AddTask = "ADD_TASK",
  HandleCompleted = "HANDLE_COMPLETED",
}
export interface IAction {
  type: ActionKind;
  id: number;
  text: string;
  status: string;
  isAllChecked: boolean;
}
