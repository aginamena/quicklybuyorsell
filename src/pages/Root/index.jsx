import { Divider, Paper, Typography } from "@mui/material";
import Footer from "components/Footer";
import TodaysProducts from "./TodaysProducts";
import HowItWorks from "./how_it_works";
import ReviewsAndRatings from "./reviews_and_ratings";

export default function Root() {
  return (
    <>
      <Paper
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h6">
          Discover and buy with ease from local sellers in your neighbourhood.
        </Typography>
      </Paper>
      <TodaysProducts />
      <HowItWorks />
      <ReviewsAndRatings />
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Footer />
    </>
  );
}
