import { Divider } from "@mui/material";
import Footer from "components/Footer";
import TodaysProducts from "./TodaysProducts";
import HowItWorks from "./howItWorks";
import ReviewsAndRatings from "./reviewsAndRatings";

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
