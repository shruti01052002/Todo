import React, { useState } from "react"
import { Box, TextField, Button } from "@mui/material";


export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
        sx={{ backgroundColor: "#8758ff", height: "56px", width: "150px", marginLeft: "-40px" }} // Set height to match TextField"s height
      >
        Add Task
      </Button>
    </Box>

  )
}