import { Box, Paper, Typography } from "@mui/material";

export default function Specification({ type, description }) {
  return (
    <Paper style={{ padding: "30px", marginTop: "40px" }}>
      <Box style={{ marginBottom: "40px" }}>
        {type && (
          <>
            <Typography variant="h6" style={{ marginBottom: "10px" }}>
              Type
            </Typography>
            <Typography style={{ color: "#dedede" }}>{type}</Typography>
          </>
        )}
      </Box>
      <Typography variant="h6" style={{ marginBottom: "10px" }}>
        Description
      </Typography>
      <Typography
        style={{
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
          color: "#dedede",
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
}
