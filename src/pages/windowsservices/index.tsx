import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import Header from "../../components/header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePickerComponent } from "../../components/DateTimePickerComponent";
import React, { useState } from "react";
import SearchByFieldName from "../../components/search/byfieldname";
import Table from "../table";

import Dropdown from "../../components/dropdown";
import SubHeader from "../../components/subheader";

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

const WindowsServices = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [value, setValue] = React.useState(0);
  // Define the field names you want to pass as props
  const fields = [
    { field: "name", headerName: "Name" },
    { field: "prefix", headerName: "Prefix" },
    { field: "suffix", headerName: "Suffix" },
    { field: "digits", headerName: "Digits" },
    { field: "incrementby", headerName: "Increment By" },
    { field: "isenable", headerName: "Is Enabled" },
  ];

  let serviceJobItems = [
    "SmsSubmissionServiceJob",
    "SmeRenewalOpportunityServiceJob",
    "CaesarReconciliationServiceJob",
    "MemberManagementFinalizerServiceJob",
    "SmsReconciliationServiceJob",
    "CaesarQueueProcessorServiceJob",
    "AutoCommunicationJobRecursion",
    "AsyncoperationDeleteCompletedService",
    "SMEMarkAsCompletePolicyServiceJob",
    "BrokerIntegrationServiceJob",
    "StartTahaqaqValidationServiceJob",
    "TeamAssignmentServiceJobBase",
    "SendExpiredLinkEmailToAMServiceJob",
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

  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Windows Services" />
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
            <Tab label="By Service Job" {...a11yProps(1)} />
            {/* <Tab label="By Search Text" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={1}>
          {/* <SearchByFieldName Label="Service Job"></SearchByFieldName> */}
          <SubHeader Title="Search by Service Job"></SubHeader>
          <Box
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
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
                onChange={setStartDate}
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
                onChange={setEndDate}
              />
            </Box>
            <Box
              gridColumn="span 1"
              backgroundColor="primary"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Dropdown Label="Service Status" Items={serviceJobItems} />
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
              >
                Find
              </Button>
            </Box>
          </Box>
          <Table fields={fields} rows={rows} setRows={setRows} />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={0}>
          <SubHeader Title="Search by Criteria"></SubHeader>
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
                onChange={setStartDate}
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
                onChange={setEndDate}
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
                fullWidth
                id="outlined-basic"
                size="small"
                label="ID"
                variant="outlined"
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
              >
                Find
              </Button>
            </Box>
          </Box>
          <Table fields={fields} rows={rows} setRows={setRows} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default WindowsServices;
