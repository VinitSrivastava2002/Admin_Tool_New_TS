import { Box, Button } from "@mui/material";
import { DateAndTimePicker } from "../dateandtimepicker";
import SubHeader from "../../components/subheader";
import { useState } from "react";
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
  onSearch: (searchCriteria: {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    serviceJob: string;
  }) => void;
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
  const [selectedServiceJob, setSelectedServiceJob] = useState<string>("");

  // Handle the change of service job in the dropdown
  const handleServiceJobChange = (status: string) => {
    setSelectedServiceJob(status); // Update local state for dropdown
    onserviceJobItemsChange(status); // Notify parent of dropdown selection
  };

  // Handle search button click and pass all values back to parent
  const handleSearchClick = () => {
    onSearch({
      startDate,
      endDate,
      serviceJob: selectedServiceJob,
    });
  };

  return (
    <Box mb="20px" sx={{ height: "100%" }}>
      <SubHeader Title={"Search by " + Label}></SubHeader>
      <Box
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridAutoRows="50px"
        sx={{ gap: "20px", marginBlock: "20px" }}
      >
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DateAndTimePicker
            label="Start Date"
            value={startDate}
            onChange={onStartDateChange} // Notify parent of start date change
          />
        </Box>
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DateAndTimePicker
            label="End Date"
            value={endDate}
            onChange={onEndDateChange} // Notify parent of end date change
          />
        </Box>
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Dropdown
            Label={DropDownLabel}
            Items={serviceJobItems}
            onChange={handleServiceJobChange} // Handle dropdown change
          />
        </Box>
        <Box
          gridColumn="span 1"
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
            onClick={handleSearchClick} // Handle search button click
          >
            Find
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
