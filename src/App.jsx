import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import React from "react";
import { reducer } from "./redux/reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, []);
  const [isAllChecked, setIsAllChecked] = React.useState(true);
  const [typeTask, setTypeTask] = React.useState(0);
  const addTask = (text, status) => {
    dispatch({
      type: "ADD_TASK",
      text,
      status,
    });
  };
  const handleCompleted = (id) => {
    dispatch({
      type: "HANDLE_COMPLETED",
      id,
    });
  };
  const handleRemove = (id) => {
    const didRemove = window.confirm("Are you sure you want to remove this task?");
    didRemove &&
      dispatch({
        type: "HANDLE_REMOVE",
        id,
      });
  };
  const checkedAll = () => {
    setIsAllChecked((prev) => !prev);
    dispatch({ type: "CHECKED_ALL", isAllChecked });
  };
  const removeAll = () => {
    if (window.confirm("Are you sure you want to remove all tasks?")) {
      dispatch({ type: "REMOVE_ALL" });
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTask={addTask} />
        <Divider />
        <Tabs value={typeTask}>
          <Tab onClick={() => setTypeTask(0)} label="Все" />
          <Tab onClick={() => setTypeTask(1)} label="Активные" />
          <Tab onClick={() => setTypeTask(2)} label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {typeTask === 0 &&
            state.map((elem) => (
              <Item
                key={elem.id}
                id={elem.id}
                status={elem.completed}
                text={elem.text}
                handleCompleted={handleCompleted}
                handleRemove={handleRemove}
              />
            ))}
          {typeTask === 1 &&
            state.map(
              (elem) =>
                !elem.completed && (
                  <Item
                    key={elem.id}
                    id={elem.id}
                    status={elem.completed}
                    text={elem.text}
                    handleCompleted={handleCompleted}
                    handleRemove={handleRemove}
                  />
                ),
            )}
          {typeTask === 2 &&
            state.map(
              (elem) =>
                elem.completed && (
                  <Item
                    key={elem.id}
                    id={elem.id}
                    status={elem.completed}
                    text={elem.text}
                    handleCompleted={handleCompleted}
                    handleRemove={handleRemove}
                  />
                ),
            )}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={checkedAll}>
            {!isAllChecked && state.length !== 0 ? "Снять отметки" : "Отметить всё"}
          </Button>
          <Button onClick={removeAll}>{!isAllChecked ? "Очистить все" : "Очистить"}</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
