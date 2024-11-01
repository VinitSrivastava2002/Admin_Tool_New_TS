// create a modals or popup window
// create a form and buttons --  create a box and inside this put controllers field and button
// then create a buttons and create abox with clip board and data box

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CodeEditor from "./codeeditor";
import { Dayjs } from "dayjs";
import CloseIcon from "@mui/icons-material/Close";

interface CustomerHandlerProps {
  TransactionId: string;
  TransactionDate: Dayjs | null;
  OperationResult: string;
  HandlerName: string;
  ProcessTime: string;
  SystemErrorLogID: string;
  handleOpen: boolean;
  handleClose: () => void;
}

const style = {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffff",
  padding: "20px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
  width: "1200px",
  height: "600px",
  gap: "16px",
  borderRadius: "8px",
};

const dummyXmlData = `
    <?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>

<food>
<name>Belgian Waffles</name>
<price>$5.95</price>
<description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>
<calories>650</calories>
</food>

<food>
<name>Strawberry Belgian Waffles</name>
<price>$7.95</price>
<description>Light Belgian waffles covered with strawberries and whipped cream</description>
<calories>900</calories>
</food>

<food>
<name>Berry-Berry Belgian Waffles</name>
<price>$8.95</price>
<description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>
<calories>900</calories>
</food>

<food>
<name>French Toast</name>
<price>$4.50</price>
<description>Thick slices made from our homemade sourdough bread</description>
<calories>600</calories>
</food>

<food>
<name>Homestyle Breakfast</name>
<price>$6.95</price>
<description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>
<calories>950</calories>
</food>

</breakfast_menu>
  `;

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

const CustomerHandler: FC<CustomerHandlerProps> = ({
  TransactionId,
  TransactionDate,
  OperationResult,
  HandlerName,
  ProcessTime,
  SystemErrorLogID,
  handleOpen,
  handleClose,
}) => {
  console.log(handleOpen);

  return (
    <Modal
      open={handleOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            position: "absolute",
            top: "1px",
            right: "1px",
            cursor: "pointer",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "1px",
              right: "1px",
              padding: 0,
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box
          sx={{
            border: 1,
            width: "auto",
            height: "auto",
            dispaly: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            borderColor: "#165a72",
            borderRadius: "8px",
          }}
        >
          <FormControl>
            <Box
              display="grid"
              gridTemplateColumns="repeat(4, 1fr)"
              gridAutoRows="50px"
              justifyContent="center"
              sx={{
                gap: "10px",
                margin: "15px",
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
                <FormLabel
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "2px",
                  }}
                >
                  Transaction ID
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  value={TransactionId}
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
                <FormLabel
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "2px",
                  }}
                >
                  Transaction Date
                </FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    disableOpenPicker
                    value={TransactionDate}
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
                <FormLabel
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "2px",
                  }}
                >
                  Operation Result
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  value={OperationResult}
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
                alignItems="end"
                justifyContent="left"
              >
                <Button
                  sx={{
                    backgroundColor: "#165a72",
                    height: "30px",
                    width: "195px",
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
                gridColumn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column" // Aligns elements vertically
              >
                <FormLabel
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "2px",
                  }}
                >
                  Handler Name
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  value={HandlerName}
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
                <FormLabel
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "2px",
                  }}
                >
                  Process Time (ms)
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  value={ProcessTime}
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
                <FormLabel
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "2px",
                  }}
                >
                  System Error Log ID
                </FormLabel>
                <TextField
                  size="small"
                  variant="outlined"
                  value={SystemErrorLogID}
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
                gridColmn="span 1"
                backgroundColor="primary"
                display="flex"
                alignItems="end"
                justifyContent="left"
              >
                <Button
                  sx={{
                    backgroundColor: "#165a72",
                    height: "30px",
                    width: "195px",
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
        <CodeBoxWithTabs CodeData={dummyXmlData} />
      </Box>
    </Modal>
  );
};

interface CodeBoxWithTabsProps {
  CodeData: string;
}

const CodeBoxWithTabs: FC<CodeBoxWithTabsProps> = ({ CodeData }) => {
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
          width: "100%",
          height: "100%",
          dispaly: "flex",
          justifyContent: "center",
          borderColor: "#165a72",
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
          <CodeEditor CodeData={CodeData} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CodeEditor CodeData={CodeData} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <CodeEditor CodeData={CodeData} />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default CustomerHandler;
