// create a modals or popup window
// create a form and buttons --  create a box and inside this put controllers field and button
// then create a buttons and create abox with clip board and data box

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { DateAndTimePicker } from "./dateandtimepicker";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface CustomerHandlerProps {}

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffff",
  padding: "20px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
  width: "768px",
  height: "600px",

  borderRadius: "8px",
};

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

const CustomerHandler: FC<CustomerHandlerProps> = () => {
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            border: 1,
            width: "auto",
            height: "auto",
            dispaly: "flex",
            justifyContent: "center",
            borderColor: "text.primary",
            // backgroundColor: "blue",
            borderRadius: "8px",
          }}
        >
          <FormControl>
            <Box
              display="grid"
              gridTemplateColumns="repeat(3, 1fr)"
              gridAutoRows="50px"
              alignContent="center"
              sx={{
                gap: "10px",
                margin: "10px",
                // marginBlock: "10px",
                width: "100%",
              }}
            >
              <Box
                gridColumn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column" // Aligns elements vertically
              >
                <FormLabel sx={{ fontSize: "14px", marginBottom: "2px" }}>
                  Transaction ID
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: "30px", // Customize the height
                      fontSize: "16px", // Customize the text size
                    },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column" // Aligns elements vertically
              >
                <FormLabel sx={{ fontSize: "14px", marginBottom: "2px" }}>
                  Transaction Date
                </FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    disableOpenPicker
                    slotProps={{ textField: { size: "small" } }}
                    sx={{
                      "& .MuiInputBase-input": {
                        height: "12px",
                      },
                    }}
                  />
                </LocalizationProvider>
              </Box>
              <Box
                gridColumn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column" // Aligns elements vertically
              >
                <FormLabel sx={{ fontSize: "14px", marginBottom: "2px" }}>
                  Operation Result
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: "30px", // Customize the height
                      fontSize: "16px", // Customize the text size
                    },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column" // Aligns elements vertically
              >
                <FormLabel sx={{ fontSize: "14px", marginBottom: "2px" }}>
                  Handler Name
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: "30px", // Customize the height
                      fontSize: "16px", // Customize the text size
                    },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column" // Aligns elements vertically
              >
                <FormLabel sx={{ fontSize: "14px", marginBottom: "2px" }}>
                  Process Time (ms)
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: "30px", // Customize the height
                      fontSize: "16px", // Customize the text size
                    },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column" // Aligns elements vertically
              >
                <FormLabel sx={{ fontSize: "14px", marginBottom: "2px" }}>
                  System Error Log ID
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: "30px", // Customize the height
                      fontSize: "16px", // Customize the text size
                    },
                  }}
                />
              </Box>
            </Box>

            {/* // butoon gor text field */}
            <Box
              gridColumn="span 1"
              backgroundColor="primary"
              display="flex"
              alignItems="flex-start"
              justifyContent="start"
              sx={{ gap: "10px", marginBottom: "10px", marginInline: "10px" }}
              flexDirection="row" // Aligns elements vertically
            >
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
                    height: "30px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                    paddingBlock: "8px",
                  }}
                  // onClick={handleSearchClick} // Call search function on button click
                >
                  Download Logs
                </Button>
              </Box>
              <Box
                gridColmn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="center"
                justifyContent="left"
              >
                <Button
                  sx={{
                    backgroundColor: "#165a72",
                    height: "30px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                    paddingBlock: "8px",
                  }}
                  // onClick={handleSearchClick} // Call search function on button click
                >
                  Send as Attachement
                </Button>
              </Box>
            </Box>
          </FormControl>
        </Box>
        <CodeBox />
      </Box>
    </Modal>
  );
};

const CodeBox: FC<CustomerHandlerProps> = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      {/* buttons and data box  */}
      <Box
        sx={{
          border: 1,
          width: "auto",
          height: "auto",
          dispaly: "flex",
          justifyContent: "center",
          borderColor: "text.primary",
          // backgroundColor: "blue",
          borderRadius: "8px",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{
              "& .MuiTabs-flexContainer": {
                padding: "0px", // Adjust padding for the tabs container if needed
              },
              "& .MuiTabs-scrollButtons.Mui-disabled": {
                opacity: "0.3",
              },
            }}
          >
            <Tab
              label="Service Request"
              {...a11yProps(0)}
              sx={{
                fontSize: "14px", // Adjust text size
                padding: "6px 12px", // Adjust padding inside the Tab
              }}
            />
            <Tab
              label="Service Response"
              {...a11yProps(1)}
              sx={{
                fontSize: "14px", // Adjust text size
                padding: "6px 12px", // Adjust padding inside the Tab
              }}
            />
            <Tab
              label="Integration Request Summery"
              {...a11yProps(2)}
              sx={{
                fontSize: "14px", // Adjust text size
                padding: "6px 12px", // Adjust padding inside the Tab
              }}
            />
            <Tab
              label="Target Entities"
              {...a11yProps(3)}
              sx={{
                fontSize: "14px", // Adjust text size
                padding: "6px 12px", // Adjust padding inside the Tab
              }}
            />
            <Tab
              label="Integration Request"
              {...a11yProps(4)}
              sx={{
                fontSize: "14px", // Adjust text size
                padding: "6px 12px", // Adjust padding inside the Tab
              }}
            />
            <Tab
              label="Integration Response"
              {...a11yProps(5)}
              sx={{
                fontSize: "14px", // Adjust text size
                padding: "6px 12px", // Adjust padding inside the Tab
              }}
            />
            <Tab
              label="Error Logs"
              {...a11yProps(6)}
              sx={{
                fontSize: "14px", // Adjust text size
                padding: "6px 12px", // Adjust padding inside the Tab
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default CustomerHandler;
