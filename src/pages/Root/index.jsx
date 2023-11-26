import { Divider } from "@mui/material";
import Footer from "components/Footer";
import TodaysProducts from "./TodaysProducts";
import HowItWorks from "./how_it_works";
import ReviewsAndRatings from "./reviews_and_ratings";

export default function Root() {
  return (
    <>
      {/* description: Discover and buy with ease from local sellers in your
      neighborhood. image: here */}
      <TodaysProducts />
      <HowItWorks />
      <ReviewsAndRatings />
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Footer />
    </>
  );
}
