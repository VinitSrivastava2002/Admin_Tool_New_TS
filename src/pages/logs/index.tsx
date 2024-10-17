import { Box, Button, Tab, Tabs } from "@mui/material";
import Header from "../../components/header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import dayjs, { Dayjs } from "dayjs";
import SearchbyCriteria from "../../components/search logs/bycriteria";
import React, { useState } from "react";
import SearchByFieldName from "../../components/search/byfieldname";
import Table from "../table";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Logs = () => {
  const [inputRow, setInputRow] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [value, setValue] = useState(0);

  const [searchText, setSearchText] = useState<string>(""); // State for search text

  // Define the field names you want to pass as props
  const fields = [
    { field: "name", headerName: "Name" },
    { field: "prefix", headerName: "Prefix" },
    { field: "suffix", headerName: "Suffix" },
    { field: "digits", headerName: "Digits" },
    { field: "incrementby", headerName: "Increment By" },
    { field: "isenable", headerName: "Is Enabled" },
  ];

  // Define the initial rows in the parent component
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // search row id ----------------------------------start
  const handleInputRow = (value: string) => {
    setInputRow(value); // Update state with the input value
  };
  const handleSearchRow = () => {
    console.log("input change:", inputRow); // Log the current transaction ID
  };
  // search row id ----------------------------------end

  // // search criteria----------------------------------start
  // const handleSearchInput = (value: string) => {
  //   setSearchInput(value); // Update state with the input value
  // };

  const handleSearch = (criteria: {
    text: string;
    startDate: Dayjs | null;
    endDate: Dayjs | null;
  }) => {
    console.log("Search criteria:", criteria);
  };
  // search criteria----------------------------------end

  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Logs" />
        <Box>
          <Button
            sx={{
              backgroundColor: "#165a72",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Export Logs
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Search Criteria" {...a11yProps(0)} />
            <Tab label="By Row Id" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={1}>
          <SearchByFieldName
            Label="Row ID"
            onChange={handleInputRow}
            onClickEvent={handleSearchRow}
          ></SearchByFieldName>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={0}>
          <SearchbyCriteria
            Label="Criteria"
            Text="Search Text"
            startDate={startDate}
            endDate={endDate}
            onTextChange={(value: string) => setSearchText(value)}
            onStartDateChange={(date) => setStartDate(date)}
            onEndDateChange={(date) => setEndDate(date)}
            onSearch={handleSearch} // Pass the handler to process the search
          />
          <Table fields={fields} rows={rows} setRows={setRows} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default Logs;
