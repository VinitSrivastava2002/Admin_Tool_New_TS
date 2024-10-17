import Header from "../../components/header";
import SearchByFieldName from "../../components/search/byfieldname";
import SearchByCriteria from "../../components/search/bycriteria";
import { Box, Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

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

export default function MemberManagementLogs() {
  const [value, setValue] = useState(0);
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [serviceStatus, setServiceStatus] = useState<string>("");
  const [handler, setHandler] = useState<string>("");
  const [inputChange, setInputChange] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputChange(value); // Update state with the input value
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSearchClick = () => {
    console.log("input change:", inputChange); // Log the current transaction ID
  };

  // Handle search logic
  const handleSearch = (criteria: {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    serviceStatus: string;
    handler: string;
  }) => {
    console.log("Search Criteria:", criteria);
    // You can use the search criteria to fetch data, filter results, etc.
  };

  let ServiceStatusItems = ["All", "Success", "Failure"];
  let HandlerItems = [
    "All",
    "Sadad Transation Handle",
    "Customer Handler",
    "Subscription Rates Handler",
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Member Management Logs" Text=""></Header>
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
            <Tab label="By Opportunity Id" {...a11yProps(1)} />
            <Tab label="By Member List Id" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={1}>
          <SearchByFieldName
            Label="Opportunity Id"
            onChange={handleInputChange}
            onClickEvent={handleSearchClick}
          ></SearchByFieldName>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <SearchByFieldName
            Label="Member List Id"
            onChange={handleInputChange}
            onClickEvent={handleSearchClick}
          ></SearchByFieldName>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={0}>
          <SearchByCriteria
            Label="Search Criteria"
            startDate={startDate}
            endDate={endDate}
            ServiceStatusItems={ServiceStatusItems}
            HandlerItems={HandlerItems}
            onStartDateChange={(date) => setStartDate(date)}
            onEndDateChange={(date) => setEndDate(date)}
            onServiceStatusChange={(status) => setServiceStatus(status)}
            onHandlerChange={(handler) => setHandler(handler)}
            onSearch={handleSearch} // Pass the search handler to handle search action
          ></SearchByCriteria>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
