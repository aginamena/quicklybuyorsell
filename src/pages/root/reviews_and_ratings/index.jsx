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
        <ReviewsAndRatingsCard
          src="root/reviews_and_ratings/image1.jpeg"
          name="Ngozi Samuels"
          description="As a fashion seller, it's very easy to advertise my products for sale in Top fashion products. One of the reasons i like Top fashion products is that you will only find high quality products for sale here."
        />
        <ReviewsAndRatingsCard src="" name="" description="" />
        <ReviewsAndRatingsCard src="" name="" description="" />
      </Box>
    </>
  );
}
