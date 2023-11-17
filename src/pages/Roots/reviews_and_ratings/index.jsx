import { Box, Container, Grid, Typography } from "@mui/material";
import ReviewsAndRatingsCard from "./ReviewsAndRatingsCard";

export default function ReveiwsAndRatings() {
  const reviews = [
    {
      src: "root/reviews_and_ratings/ngozi_samuels.jpeg",
      name: "Ngozi Samuels",
      description:
        "As a fashion seller, it's very easy to advertise my products for sale here. One of the reasons i like Top fashion products is that you will only find high quality products for sale here.",
    },
    {
      src: "root/reviews_and_ratings/celeb_johnson.jpeg",
      name: "Celeb Johnson",
      description:
        "Connecting with sellers your local sellers is the fastest way to view and receive products, instead of waiting for days for the products to be shipped to you for review. One of the reasons i keep coming back to Top fashion products is that their site is easy to use.",
    },
    {
      src: "root/reviews_and_ratings/mercy_adams.jpeg",
      name: "Mercy Adams",
      description:
        "I sell products here and sometimes i buy from other providers. With the vast amount of products on the site, I can easily find the specific product(s) i'm looking for and contact the seller. This was how many of my clients contacted me because they could easily find my products on the site.",
    },
  ];
  return (
    <Container>
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        What our customers say
      </Typography>
      <Grid container spacing={2}>
        {reviews.map(({ src, name, description }, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ReviewsAndRatingsCard
              src={src}
              name={name}
              description={description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
