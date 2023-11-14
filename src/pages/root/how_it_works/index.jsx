import { Box, Typography, Container } from "@mui/material";
import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorks() {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "30px", marginTop: "30px" }}
      >
        How it works
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <HowItWorksCard
          title="Explore a wide selection of verified fashion and electrical products."
          imagePath="root/how_it_works/view_wide_selection_of_products.jpg"
        />
        <HowItWorksCard
          title="Contact the seller through direct messaging."
          imagePath="root/how_it_works/send_a_message_to_the_seller.jpg"
        />
        <HowItWorksCard
          title="Arrange a meeting with the seller to inspect the product in person."
          imagePath="root/how_it_works/inspect_the_product_in_person.jpg"
        />
        <HowItWorksCard
          title="Pay the seller once you've confirmed that the product meets your expectations."
          imagePath="root/how_it_works/pay_for_the_product.jpg"
        />
      </Box>
    </Box>
  );
}
