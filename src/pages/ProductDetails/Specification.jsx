import { Box, Paper, Typography } from "@mui/material";

export default function Specification({
  type,
  description,
  productId,
  isAdmin,
  productStatus,
}) {
  return (
    <Paper style={{ padding: "30px", marginTop: "40px" }}>
      <Box style={{ marginBottom: "40px" }}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Type
        </Typography>
        <Typography style={{ color: "#dedede" }}>{type}</Typography>
        {isAdmin && (
          <>
            <Typography variant="h6" style={{ marginBottom: "10px" }}>
              ProductId
            </Typography>
            <Typography style={{ color: "#dedede" }}>{productId}</Typography>
            <Typography variant="h6" style={{ marginBottom: "10px" }}>
              Product Status
            </Typography>
            <Typography style={{ color: "#dedede" }}>
              {productStatus}
            </Typography>
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
