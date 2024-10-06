import { Box, Button } from "@mui/material";
import Header from "../../components/header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const IbmApi = () => {
  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="IBM Api" />
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
    </Box>
  );
};

export default IbmApi;
