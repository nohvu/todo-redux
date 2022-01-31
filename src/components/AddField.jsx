import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

export const AddField = ({ addTask }) => {
  const [radioStatus, setRadioStatus] = React.useState(false);
  const [task, setTask] = React.useState("");
  const handleClickCheck = (event) => {
    setRadioStatus(event.target.checked);
  };
  const handleClickAdd = () => {
    if (radioStatus === true) {
      setRadioStatus((prev) => !prev);
    }
    task.trim() && addTask(task, radioStatus);
    setTask("");
  };
  const changeInput = (event) => {
    setTask(event.target.value);
  };
  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={radioStatus}
        onClick={handleClickCheck}
      />
      <TextField
        onChange={changeInput}
        value={task}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button onClick={handleClickAdd}>
        <AddIcon />
      </Button>
    </div>
  );
};
