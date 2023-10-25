import { Box, Typography } from "@mui/material";
import HowItWorksCard from "./card";

export default function HowItWorks() {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "30px" }}
      >
        How it works
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <HowItWorksCard
          title="Browse through thousands of verified fashion and electrical products"
          imagePath="root/how_it_works/browse_through_thousands_of_products.jpg"
          description="All products in the marketplace undergo thorough verification by our team of officers before receiving approval for public visibility."
        />
        <HowItWorksCard
          title="Send a message to the seller"
          imagePath="root/how_it_works/send_a_message_to_the_seller.jpg"
          description="Using our built-in messaging application you can send and receive messages from sellers."
        />
        <HowItWorksCard
          title="Start the transaction process"
          imagePath=""
          description=""
        />
      </Box>
    </Box>
  );
}
