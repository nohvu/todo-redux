import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import React from "react";
import { reducer } from "./redux/reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, []);

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

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTask={addTask} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((elem) => (
            <Item
              key={elem.id}
              id={elem.id}
              status={elem.completed}
              text={elem.text}
              handleCompleted={handleCompleted}
              handleRemove={handleRemove}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
