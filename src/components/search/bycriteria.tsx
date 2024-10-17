import { Box, Button } from "@mui/material";
import SubHeader from "../subheader";
import DropDown from "../dropdown";
import Table from "../../pages/table";
import { Dayjs } from "dayjs";
import { DateAndTimePicker } from "../dateandtimepicker";
import { useState } from "react";

interface SearchByCriteriaProps {
  Label: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  ServiceStatusItems: string[];
  HandlerItems: string[];
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  onServiceStatusChange: (status: string) => void;
  onHandlerChange: (handler: string) => void;
  onSearch: (criteria: {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    serviceStatus: string;
    handler: string;
  }) => void;
}

export default function SearchByCriteria({
  Label,
  startDate,
  endDate,
  ServiceStatusItems,
  HandlerItems,
  onStartDateChange,
  onEndDateChange,
  onServiceStatusChange,
  onHandlerChange,
  onSearch,
}: SearchByCriteriaProps) {
  const [selectedServiceStatus, setSelectedServiceStatus] =
    useState<string>("");
  const [selectedHandler, setSelectedHandler] = useState<string>("");

  // Handle the change of service status dropdown
  const handleServiceStatusChange = (status: string) => {
    setSelectedServiceStatus(status); // Update local state
    onServiceStatusChange(status); // Notify parent
  };

  // Handle the change of handler dropdown
  const handleHandlerChange = (handler: string) => {
    setSelectedHandler(handler); // Update local state
    onHandlerChange(handler); // Notify parent
  };

  // Handle the search action and pass the criteria back to the parent
  const handleSearchClick = () => {
    onSearch({
      startDate,
      endDate,
      serviceStatus: selectedServiceStatus,
      handler: selectedHandler,
    });
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
  const [rows, setRows] = useState([
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
  ]);

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
            value={startDate}
            onChange={onStartDateChange} // Pass start date change to parent
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
            value={endDate}
            onChange={onEndDateChange} // Pass end date change to parent
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
            onChange={handleServiceStatusChange} // Handle service status change
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
            onChange={handleHandlerChange} // Handle handler change
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
      <Table fields={fields} rows={rows} setRows={setRows} />
    </Box>
  );
}
