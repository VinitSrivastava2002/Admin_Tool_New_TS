import { Box, Button, TextField } from "@mui/material";
import { DateTimePickerComponent } from "../../components/DateTimePickerComponent";
import SubHeader from "../../components/subheader";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface SearchByFieldProps {
  Label: string;
  Text: String;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  onTextChange: (value: string) => void; // onChange prop to capture input changes
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  onSearch: () => void;
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
  const [inputValue, setInputValue] = useState<string>(""); // State for input value

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update local state
    onTextChange(event.target.value); // Call the onChange prop to notify parent of changes
  };

  return (
    <>
      <Box mb="20px" sx={{ height: "100%" }}>
        <SubHeader Title={"Search by " + Label}></SubHeader>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 0.2fr)"
          gridAutoRows="50px"
          sx={{ gap: "20px", marginBlock: "20px" }} //, backgroundColor: "#ffff"
        >
          <Box
            gridColumn="span 1"
            // backgroundColor="#ffff"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {" "}
            <DateTimePickerComponent
              label="Start Date"
              value={startDate}
              onChange={onStartDateChange} // Use prop function to update start date
            />
          </Box>
          <Box
            gridColumn="span 1"
            // backgroundColor="#ffff"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {" "}
            <DateTimePickerComponent
              label="End Date"
              value={endDate}
              onChange={onEndDateChange} // Use prop function to update end date
            />
          </Box>
          <Box
            gridColumn="span 1"
            backgroundColor="primary"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              // fullWidth
              sx={{ minWidth: "250px" }}
              id="outlined-basic"
              size="small"
              label={Text}
              variant="outlined"
              value={inputValue} // Bind the input value to the state
              onChange={handleInputChange} // Handle input change
            />
          </Box>
          <Box
            gridColumn="span 1"
            backgroundColor="primary"
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
              onClick={onSearch}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
