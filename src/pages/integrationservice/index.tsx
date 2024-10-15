import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import Header from "../../components/header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import Table from "../table";
import SubHeader from "../../components/subheader";
import SearchbyCriteria from "../../components/search logs/bycriteria";
import SearchbyJob from "../../components/search logs/byJob";

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

const IntegrationService = () => {
  const [inputID, setInputId] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [serviceStatus, setServiceStatus] = useState<string>("");
  const [value, setValue] = useState(0);
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

  const handleIdChange = (value: string) => {
    setInputId(value); // Update state with the input value
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSearch = () => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("ID: ", inputID);
    console.log("ServiceStatus: ", serviceStatus);
  };

  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Integration Services" />
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
            <Tab label="Job" {...a11yProps(1)} />
            <Tab label="Order" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={1}>
          <SearchbyJob
            Label="Job"
            DropDownLabel="Job Name"
            serviceJobItems={serviceJobItems}
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onserviceJobItemsChange={setServiceStatus}
            onSearch={handleSearch}
          />
          <Table fields={fields} rows={rows} setRows={setRows} />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={0}>
          <SearchbyCriteria
            Label="Criteria"
            Text="ID"
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onTextChange={handleIdChange}
            onSearch={handleSearch}
          />
          <Table fields={fields} rows={rows} setRows={setRows} />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <SubHeader Title="Search by Order"></SubHeader>
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 0.2fr)"
            gridAutoRows="50px"
            sx={{ gap: "20px", marginBlock: "20px" }} //, backgroundColor: "#ffff"
          >
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
                label="Order ID"
                variant="outlined"
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
                label="Contract Number"
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

export default IntegrationService;
