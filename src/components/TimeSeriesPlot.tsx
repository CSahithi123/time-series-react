import { Box, Button, CardHeader, Stack } from "@mui/material";
import type { FC } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
const TimeSeriesPlot: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CardHeader
        title="Time Series Plotting"
        sx={{ color: "#367c2b", textAlign: "left" }}
      ></CardHeader>
      <Stack direction="row" spacing={2} sx={{ px: 2, py: 1, mb: 2 }}>
        <Button
          startIcon={<FileUploadOutlinedIcon />}
          variant="outlined"
          sx={{ color: "#367c2b", border: "1px solid #367c2b" }}
        >
          {"Import Layout"}
        </Button>
        <Button
          startIcon={<FileUploadOutlinedIcon />}
          variant="outlined"
          sx={{ color: "#367c2b", border: "1px solid #367c2b" }}
        >
          {"Export Layout"}
        </Button>
        <Button
          startIcon={<FileUploadOutlinedIcon />}
          variant="outlined"
          sx={{ color: "#367c2b", border: "1px solid #367c2b" }}
        >
          {"Import Data"}
        </Button>
        <Button
          startIcon={<FileUploadOutlinedIcon />}
          variant="outlined"
          sx={{ color: "#367c2b", border: "1px solid #367c2b" }}
        >
          {"Export Data"}
        </Button>
        <Box sx={{ flex: 1 }} />
        <Button
          startIcon={<FileUploadOutlinedIcon />}
          variant="outlined"
          sx={{ color: "#367c2b", border: "1px solid #367c2b" }}
        >
          {"Annotations"}
        </Button>
        <Button
          startIcon={<FileUploadOutlinedIcon />}
          variant="outlined"
          sx={{ color: "#367c2b", border: "1px solid #367c2b" }}
        >
          {"Clear Cursors"}
        </Button>
      </Stack>
    </Box>
  );
};
export default TimeSeriesPlot;
