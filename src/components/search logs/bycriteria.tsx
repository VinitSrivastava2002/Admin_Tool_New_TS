import { Box, Button, TextField } from "@mui/material";
import { DateTimePickerComponent } from "../../components/DateTimePickerComponent";
import SubHeader from "../../components/subheader";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface SearchByFieldProps {
  Label: string;
  Text: String;
  onClickEvent: () => void;
}

export default function SearchbyCriteria({ Label, Text }: SearchByFieldProps) {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  return (
    <>
      <Box mb="20px" sx={{ height: "100%" }}>
        <SubHeader Title={"Search by " + Label}></SubHeader>
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
              label={Text}
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
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
