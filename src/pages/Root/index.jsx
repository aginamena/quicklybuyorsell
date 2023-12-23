import {
  Divider,
  Box,
  Typography,
  Container,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Footer from "components/Footer";
import TodaysProducts from "./TodaysProducts";
import HowItWorks from "./howItWorks";
import ReviewsAndRatings from "./reviewsAndRatings";

export default function Root() {
  const theme = useTheme();
  const ismediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );

  return (
    <>
      <Toolbar />
      <Container
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          fontSize: "22px",
          justifyContent: "space-evenly",
          marginBottom: "100px",
          textAlign: { xs: "center" },
        }}
      >
        Getting your desired Nike <br /> shoe can be faster and safer
        <img
          src="root/introduction_image.jpg"
          style={{
            width: ismediumScreenSizeAndBelow ? "100%" : "500px",
            marginTop: ismediumScreenSizeAndBelow ? "20px" : "0",
          }}
        />
      </Container>
      <Container style={{ textAlign: "center", color: "#dedede" }}>
        <Box style={{ fontSize: "19px" }}>
          "Since day one, our mission has been to provide you with fast and
          secure access to the Nike shoes you desire. <br /> Every product
          showcased on our site undergoes verification by our administrators
          before being published, ensuring a marketplace that is not only speedy
          but also the safest destination for your Nike shoe needs"
        </Box>
        <Typography style={{ marginTop: "20px" }}>
          Mena Agina - Founder & CEO
        </Typography>
      </Container>

      <TodaysProducts />
      <HowItWorks />

      <ReviewsAndRatings />
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Footer />
    </>
  );
}
