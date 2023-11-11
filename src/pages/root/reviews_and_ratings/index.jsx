import { Box, Container, Typography } from "@mui/material";
import ReviewsAndRatingsCard from "./ReviewsAndRatingsCard";

export default function ReveiwsAndRatings() {
  return (
    <Container>
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        What our customers say
      </Typography>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <ReviewsAndRatingsCard />
        <ReviewsAndRatingsCard />
        <ReviewsAndRatingsCard />
      </Box>
    </Container>
  );
}
