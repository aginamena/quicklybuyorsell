import { Box, Container, Typography } from "@mui/material";
import ReviewsAndRatingsCard from "./ReviewsAndRatingsCard";

export default function ReveiwsAndRatings() {
  return (
    <>
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        What our customers say
      </Typography>
      <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        <ReviewsAndRatingsCard />
        <ReviewsAndRatingsCard />
        <ReviewsAndRatingsCard />
      </Box>
    </>
  );
}
