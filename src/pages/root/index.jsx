import Footer from "components/footer";
import Header from "components/header";
import HowItWorks from "./how_it_works";
import TodaysProducts from "./todays_products";
import TopSellers from "./top_sellers";
import WhatOurCustomersSay from "./what_our_customers_say";

export default function Root() {
  return (
    <>
      <Header />
      <TodaysProducts />
      <TopSellers />
      <HowItWorks />
      <WhatOurCustomersSay />
      <Footer />
    </>
  );
}
