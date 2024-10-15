import { Box, Button } from "@mui/material";
import SubHeader from "../subheader";
import DropDown from "../dropdown";
import Table from "../../pages/table";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { DateTimePickerComponent } from "../DateTimePickerComponent";

interface SearchByFieldNameProps {
  Label: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  ServiceStatusItems: string[];
  HandlerItems: string[];
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  onServiceStatusChange: (status: string) => void;
  onHandlerChange: (handler: string) => void;
  onSearch: () => void;
}

export default function SearchByFieldName({
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
}: SearchByFieldNameProps) {
  // Define the field names you want to pass as props
  const fields = [
    { field: "name", headerName: "Name" },
    { field: "prefix", headerName: "Prefix" },
    { field: "suffix", headerName: "Suffix" },
    { field: "digits", headerName: "Digits" },
    { field: "incrementby", headerName: "Increment By" },
    { field: "isenable", headerName: "Is Enabled" },
  ];

  // Define the initial rows
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
          <DateTimePickerComponent
            label="Start Date"
            value={startDate}
            onChange={onStartDateChange} // Use prop function to update start date
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
          <DateTimePickerComponent
            label="End Date"
            value={endDate}
            onChange={onEndDateChange} // Use prop function to update end date
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
            onChange={onServiceStatusChange}
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
            onChange={onHandlerChange}
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
            onClick={onSearch} // Call the search function passed as a prop
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
