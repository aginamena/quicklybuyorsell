import Footer from "components/Footer";
import Header from "components/Header";
import HowItWorks from "./HowItWorks";
import TodaysProducts from "./TodaysProducts";
import TopSellers from "./TopSellers";
import WhatOurCustomersSay from "./WhatOurCustomersSay";

export default function Root() {
  return (
    <>
      <TodaysProducts />
      <TopSellers />
      <HowItWorks />
      <WhatOurCustomersSay />
      <Footer />
    </>
  );
}
