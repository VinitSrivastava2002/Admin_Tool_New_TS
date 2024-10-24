import { Box, Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SubHeader from "../subheader";
import { useRef, useState } from "react";
import Table from "../../pages/table";

interface SearchByFieldProps {
  Label: string;
  // onChange: (value: string) => void; // onChange prop to capture input changes
  // onClickEvent: () => void; // onClick prop for search button click
}

// Define the field names you want to pass as props
const fields = [
  { field: "name", headerName: "Name" },
  { field: "address", headerName: "Address" },
  { field: "phonenumber", headerName: "Phone no." },
  { field: "age", headerName: "Age" },
  { field: "incrementby", headerName: "Increment By" },
  { field: "isenable", headerName: "Is Enabled" },
];

export default function SearchByFieldName({ Label }: SearchByFieldProps) {
  // Define the initial rows in the parent component
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Name1",
      address: "Prefix1",
      phonenumber: "Suffix1",
      age: "1234",
      incrementby: "1",
      isenable: "Yes",
    },
  ]);

  // useRef to store the input value without triggering re-renders
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle the search action and pass the criteria back to the parent
  const handleSearchClick = () => {
    const searchCriteria = {
      searchField: inputRef.current?.value || "", // Get value from the ref
    };
    console.log(
      "Search Criteria inside byFieldName log component:",
      searchCriteria
    );
  };

  return (
    <>
      <Box mb="20px" sx={{ height: "100%" }}>
        <SubHeader Title={"Search By " + Label}></SubHeader>
        <Paper
          component="form"
          sx={{
            marginBottom: "20px",
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "72.5rem",
          }}
          onSubmit={(e) => e.preventDefault()} // Prevent form submit default action
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={Label}
            inputProps={{ "aria-label": `search ${Label}` }}
            inputRef={inputRef} // Attach ref to InputBase
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearchClick} // Trigger the search on click
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Table fields={fields} rows={rows} setRows={setRows} />
      </Box>
    </>
  );
}
