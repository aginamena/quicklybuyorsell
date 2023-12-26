import { Container, Grid, Typography } from "@mui/material";
import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorks() {
  const cards = [
    {
      title:
        "Explore a wide selection of verified products that meet your needs.",
      imagePath: "root/how_it_works/view_wide_selection_of_products.jpg",
    },
    {
      title: "Contact the seller through direct messaging.",
      imagePath: "root/how_it_works/send_a_message_to_the_seller.jpg",
    },
    {
      title:
        "Arrange a meeting with the seller to inspect the product in person.",
      imagePath: "root/how_it_works/inspect_the_product_in_person.jpg",
    },
    {
      title:
        "Pay through the site once you've confirmed that the product meets your expectations.",
      imagePath: "root/how_it_works/pay_for_the_product.jpg",
    },
  ];
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "30px", marginTop: "30px" }}
      >
        How it works
      </Typography>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <HowItWorksCard title={card.title} imagePath={card.imagePath} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
