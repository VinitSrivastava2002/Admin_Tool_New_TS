import { Box, Button } from "@mui/material";
import { DateAndTimePicker } from "../dateandtimepicker";
import SubHeader from "../../components/subheader";
import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Dropdown from "../dropdown";

interface SearchByFieldProps {
  Label: string;
  DropDownLabel: string;
  serviceJobItems: string[];
}

export default function SearchbyJob({
  Label,
  DropDownLabel,
  serviceJobItems,
}: SearchByFieldProps) {
  // Initialize refs with default values
  const defaultStartDate = dayjs().subtract(7, "days"); // Default start date (7 days ago)
  const defaultEndDate = dayjs(); // Default end date (current date)

  // Refs for the form values
  const startDateRef = useRef<Dayjs | null>(defaultStartDate); // Default to 7 days ago
  const endDateRef = useRef<Dayjs | null>(defaultEndDate); // Default to current date
  const serviceJobItemRef = useRef<string>(""); // For DropDown

  // Handle the search action and pass the criteria back to the parent
  const handleSearchClick = () => {
    const searchCriteria = {
      startDate: startDateRef.current?.format("DD-MM-YYYY") || "",
      endDate: endDateRef.current?.format("DD-MM-YYYY") || "",
      serviceJobItemsStatus: serviceJobItemRef.current,
    };

    // onSearch(searchCriteria);
    console.log("Search Criteria inside by job component:", searchCriteria);
  };

  return (
    <Box mb="20px" sx={{ height: "100%" }}>
      <SubHeader Title={"Search by " + Label}></SubHeader>
      <Box
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
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
          <Dropdown
            Label={DropDownLabel}
            Items={serviceJobItems}
            value={serviceJobItemRef.current} // Bind value to ref
            onChange={(status: string) => (serviceJobItemRef.current = status)} // Store value in ref
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
            Find
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
