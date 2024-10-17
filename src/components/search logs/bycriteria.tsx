import { Box, Button, TextField } from "@mui/material";
import { DateAndTimePicker } from "../dateandtimepicker";
import SubHeader from "../../components/subheader";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface SearchByFieldProps {
  Label: string;
  Text: String;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  onTextChange: (value: string) => void;
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  onSearch: (criteria: {
    text: string;
    startDate: Dayjs | null;
    endDate: Dayjs | null;
  }) => void; // Pass search criteria back to parent
}

export default function SearchbyCriteria({
  Label,
  Text,
  startDate,
  endDate,
  onTextChange,
  onStartDateChange,
  onEndDateChange,
  onSearch,
}: SearchByFieldProps) {
  const [inputValue, setInputValue] = useState<string>(""); // Local state for input value

  // Handle input change for the search text
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value); // Update local state
    onTextChange(value); // Notify parent component of input change
  };

  // Handle the search action (pass all values back to parent)
  const handleSearchClick = () => {
    // Pass the input values (text, startDate, endDate) to the parent via the onSearch prop
    onSearch({
      text: inputValue,
      startDate: startDate,
      endDate: endDate,
    });
  };

  return (
    <>
      <Box mb="20px" sx={{ height: "100%" }}>
        <SubHeader Title={"Search by " + Label}></SubHeader>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 0.2fr)"
          gridAutoRows="50px"
          sx={{ gap: "20px", marginBlock: "20px" }}
        >
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <DateAndTimePicker
              label="Start Date"
              value={startDate}
              onChange={onStartDateChange} // Notify parent of start date change
            />
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <DateAndTimePicker
              label="End Date"
              value={endDate}
              onChange={onEndDateChange} // Notify parent of end date change
            />
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              sx={{ minWidth: "250px" }}
              id="outlined-basic"
              size="small"
              label={Text}
              variant="outlined"
              value={inputValue} // Bind input value to local state
              onChange={handleInputChange} // Handle input change
            />
          </Box>
          <Box
            gridColumn="span 1"
            display="flex"
            alignItems="center"
            justifyContent="left"
          >
            <Button
              sx={{
                backgroundColor: "#165a72",
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                paddingBlock: "8px",
              }}
              onClick={handleSearchClick} // Handle search button click
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
