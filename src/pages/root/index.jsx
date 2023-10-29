import Footer from "components/Footer";
import FeaturedProducts from "./FeaturedProducts";
import HowItWorks from "./HowItWorks";
import WhatOurCustomersSay from "./WhatOurCustomersSay";

export default function Root() {
  return (
    <>
      <FeaturedProducts />
      <HowItWorks />
      <WhatOurCustomersSay />
      <Footer />
    </>
  );
}
