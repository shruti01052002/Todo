import React, {useState} from "react";
import { Box, TextField, Button } from "@mui/material";

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const [err, setErr] = useState("");

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if(value) {
          editTodo(value, task.id);
          setErr("");
        } else {
          setErr("Field can't be blank");
        }
      };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
    <TextField
      fullWidth
      value={value}
      onChange={(e) => {setValue(e.target.value);
        if(e.target.value) {
          setErr("");
        } else {
          setErr("Field can't be blank");
        }
      }}
      placeholder="Add a new task"
      variant="outlined"
      sx={{
        input: { color: "white", width: "100%" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#8758ff",
          },
        },
        "& .MuiInputBase-root": {
          backgroundColor: "transparent",
          marginRight: "1rem", // Add some space between input and button
        },
      }}
      InputLabelProps={{ style: { color: "#ffffff4d" } }}
    />
    <Button
      type="submit"
      variant="contained"
      sx={{ backgroundColor: "#8758ff", height: "56px", width: "150px", marginLeft: "-40px", padding:"0.55rem" }} // Set height to match TextField"s height
    >
      Update Task
    </Button>
    <p className="err_text">{err?err:""}</p>
  </Box>

  )
}