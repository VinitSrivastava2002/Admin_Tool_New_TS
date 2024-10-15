import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Box } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface DropDownProps {
  Label: string;
  Items: string[];
  onChange: (value: string) => void; // Accept onChange as a prop
}

export default function DropDown({
  Label,
  Items,

  onChange,
}: DropDownProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value); // Pass selected value back to parent via onChange prop
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl
        sx={{
          ".MuiInputBase-root": {
            backgroundColor: "#ffff",
            minWidth: "250px",
          },
        }}
        size="small"
      >
        <InputLabel>{Label}</InputLabel>
        <Select label={Label} onChange={handleChange}>
          {Items.map((Item, index) => (
            <MenuItem key={index} value={Item}>
              {" "}
              {/* Use Item as value */}
              {Item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
