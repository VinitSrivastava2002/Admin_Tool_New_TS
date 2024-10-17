import { Box, Button, TextField } from "@mui/material";
import { DateAndTimePicker } from "../dateandtimepicker";
import SubHeader from "../../components/subheader";
import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface SearchByFieldProps {
  Label: string;
  Text: string;
}

export default function SearchbyCriteria({ Label, Text }: SearchByFieldProps) {
  // Initialize refs with default values
  const defaultStartDate = dayjs().subtract(7, "days"); // Default start date (7 days ago)
  const defaultEndDate = dayjs(); // Default end date (current date)

  // Refs for the form values
  const startDateRef = useRef<Dayjs | null>(defaultStartDate); // Default to 7 days ago
  const endDateRef = useRef<Dayjs | null>(defaultEndDate); // Default to current date
  const searchFieldRef = useRef<HTMLInputElement>(null); // Ref for the text field

  // Handle the search action and pass the criteria back to the parent
  const handleSearchClick = () => {
    const searchCriteria = {
      startDate: startDateRef.current?.format("DD-MM-YYYY") || "",
      endDate: endDateRef.current?.format("DD-MM-YYYY") || "",
      searchField: searchFieldRef.current?.value || "", // Get value from the ref
    };

    // onSearch(searchCriteria);
    console.log(
      "Search Criteria inside bycreteria log component:",
      searchCriteria
    );
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
              value={startDateRef.current} // Bind value to ref
              onChange={(date: Dayjs | null) => (startDateRef.current = date)} // Store value in ref
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
              value={endDateRef.current} // Bind value to ref
              onChange={(date: Dayjs | null) => (endDateRef.current = date)} // Store value in ref
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
              inputRef={searchFieldRef} // Attach ref to the input element
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
