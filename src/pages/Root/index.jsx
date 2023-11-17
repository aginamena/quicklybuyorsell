import Footer from "components/Footer";
import TodaysProducts from "./TodaysProducts";
import HowItWorks from "./how_it_works";
import ReviewsAndRatings from "./reviews_and_ratings";
import { Divider } from "@mui/material";

export default function Root() {
  return (
    <>
      <TodaysProducts />
      <HowItWorks />
      <ReviewsAndRatings />
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Footer />
    </>
  );
}
