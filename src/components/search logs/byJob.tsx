import { Box, Button } from "@mui/material";
import { DateTimePickerComponent } from "../../components/DateTimePickerComponent";
import SubHeader from "../../components/subheader";

import { Dayjs } from "dayjs";
import Dropdown from "../dropdown";

interface SearchByFieldProps {
  Label: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  DropDownLabel: string;
  serviceJobItems: string[];
  onserviceJobItemsChange: (status: string) => void;
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  onSearch: () => void;
}

export default function SearchbyJob({
  Label,
  startDate,
  endDate,
  DropDownLabel,
  serviceJobItems,
  onserviceJobItemsChange,
  onStartDateChange,
  onEndDateChange,
  onSearch,
}: SearchByFieldProps) {
  return (
    <>
      <Box mb="20px" sx={{ height: "100%" }}>
        <SubHeader Title={"Search by " + Label}></SubHeader>
        <Box
          display="grid"
          gridTemplateColumns="repeat(5, 1fr)"
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
              onChange={onStartDateChange} // Use prop function to update start date
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
              onChange={onEndDateChange}
            />
          </Box>
          <Box
            gridColumn="span 1"
            backgroundColor="primary"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Dropdown
              Label={DropDownLabel}
              Items={serviceJobItems}
              onChange={onserviceJobItemsChange}
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
              onClick={onSearch}
            >
              Find
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
