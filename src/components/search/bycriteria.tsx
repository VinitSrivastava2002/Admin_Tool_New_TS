import { Box, Button } from "@mui/material";
import SubHeader from "../subheader";
import DropDown from "../dropdown"; // Assuming DropDown is a custom component
import Table from "../../pages/table"; // Assuming Table is a custom component
import { useRef } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateAndTimePicker } from "../dateandtimepicker"; // Assuming this is a custom component

interface SearchByCriteriaProps {
  Label: string;
  ServiceStatusItems: string[];
  HandlerItems: string[];
}

export default function SearchByCriteria({
  Label,
  ServiceStatusItems,
  HandlerItems,
}: // onSearch,
SearchByCriteriaProps) {
  // Initialize refs with default values
  const defaultStartDate = dayjs().subtract(7, "days"); // Default start date (7 days ago)
  const defaultEndDate = dayjs(); // Default end date (current date)

  // Refs for the form values
  const startDateRef = useRef<Dayjs | null>(defaultStartDate); // Default to 7 days ago
  const endDateRef = useRef<Dayjs | null>(defaultEndDate); // Default to current date
  const serviceStatusRef = useRef<string>(""); // For DropDown
  const handlerRef = useRef<string>(""); // For DropDown

  // Handle the search action and pass the criteria back to the parent
  const handleSearchClick = () => {
    const searchCriteria = {
      startDate: startDateRef.current?.format("DD-MM-YYYY") || "",
      endDate: endDateRef.current?.format("DD-MM-YYYY") || "",
      serviceStatus: serviceStatusRef.current,
      handler: handlerRef.current,
    };

    // onSearch(searchCriteria);
    console.log("Search Criteria inside bycreteria component:", searchCriteria);
  };

  // Table field names
  const fields = [
    { field: "name", headerName: "Name" },
    { field: "prefix", headerName: "Prefix" },
    { field: "suffix", headerName: "Suffix" },
    { field: "digits", headerName: "Digits" },
    { field: "incrementby", headerName: "Increment By" },
    { field: "isenable", headerName: "Is Enabled" },
  ];

  // Initial rows for the table
  const rows = [
    {
      id: 1,
      name: "Name1",
      prefix: "Prefix1",
      suffix: "Suffix1",
      digits: "1234",
      incrementby: "1",
      isenable: "Yes",
    },
    {
      id: 2,
      name: "Name2",
      prefix: "Prefix2",
      suffix: "Suffix2",
      digits: "5678",
      incrementby: "2",
      isenable: "No",
    },
  ];

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <SubHeader Title={"Search by " + Label}></SubHeader>

      <Box
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridAutoRows="50px"
        sx={{
          gap: "20px",
          marginBlock: "20px",
          width: "100%",
        }}
      >
        {/* Start Date Picker */}
        <Box gridColumn="span 1" backgroundColor="primary" display="flex">
          <DateAndTimePicker
            label="Start Date"
            value={startDateRef.current} // Bind value to ref
            onChange={(date: Dayjs | null) => (startDateRef.current = date)} // Store value in ref
          />
        </Box>

        {/* End Date Picker */}
        <Box
          gridColumn="span 1"
          backgroundColor="primary"
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

        {/* Service Status DropDown */}
        <Box
          gridColumn="span 1"
          backgroundColor="primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DropDown
            Label="Service Status"
            Items={ServiceStatusItems}
            value={serviceStatusRef.current} // Bind value to ref
            onChange={(status: string) => (serviceStatusRef.current = status)} // Store value in ref
          />
        </Box>

        {/* Handler DropDown */}
        <Box
          gridColumn="span 1"
          backgroundColor="primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DropDown
            Label="Handlers"
            Items={HandlerItems}
            value={handlerRef.current} // Bind value to ref
            onChange={(handler: string) => (handlerRef.current = handler)} // Store value in ref
          />
        </Box>

        {/* Search Button */}
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
            onClick={handleSearchClick} // Call search function on button click
          >
            Search
          </Button>
        </Box>
      </Box>

      {/* Table Component */}
      <Table fields={fields} rows={rows} />
    </Box>
  );
}
