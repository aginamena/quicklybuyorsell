import {
  Box,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "components/Footer";
import ReviewsAndRatingsCard from "components/ReviewsAndRatingsCard";
import ValuePropositionCard from "./ValuePropositionCard";

export default function SellYourProducts() {
  const cards = [
    {
      title: "Free product listing",
      imagePath: "sellYourProducts/free.png",
      description:
        "List an unlimited number of products for sale in our marketplace without any cost.",
    },
    {
      title: "Targeted exposure",
      imagePath: "sellYourProducts/target_icon.jpg",
      description:
        "We ensure your products are visible to buyers genuinely interested in what you're selling.",
    },
    {
      title: "Communication hub",
      imagePath: "sellYourProducts/communication_hub.jpg",
      description:
        "Connect effortlessly with buyers through diverse communication channels, including chat, voice recordings, video, and more",
    },
  ];

  const reviews = [
    {
      src: "sellYourProducts/catharina_mabel.jpg",
      name: "Catharina Mabel",
      description:
        "As a busy craftwoman, i find it easy listing my products on QBOS. The site is EASY to use. With few steps my products gets ready. I connect with my buyers swiftly.",
    },
    {
      src: "sellYourProducts/sarah_jude.jpg",
      name: "Sarah Jude",
      description:
        "I can do video calls, send recordings, pictures, videos, etc on Whatsapp. This is a very good communication tool that this platform integrates for sellers to communicate with buyers.",
    },
    {
      src: "sellYourProducts/blessing_moses.jpg",
      name: "Blessing Moses",
      description:
        "I sell my products faster in this platform because they only show my products to people that are really interested in it. Compared to other platforms i've been, it takes longer to sell products there than here.",
    },
  ];

  const theme = useTheme();

  const isMediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );

  return (
    <>
      <Container>
        <Toolbar />

        <Box style={{ textAlign: "center" }}>
          <iframe
            width={isMediumScreenSizeAndBelow ? "100%" : "853px"}
            height={isMediumScreenSizeAndBelow ? "100%" : "480px"}
            src={`https://www.youtube.com/embed/c9vWUYa7sLk`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Box>

        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginBottom: "30px", marginTop: "30px" }}
        >
          We Offer
        </Typography>
        <Grid container spacing={2} style={{ justifyContent: "space-evenly" }}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ValuePropositionCard
                title={card.title}
                description={card.description}
                imagePath={card.imagePath}
              />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h4">Sign in today!</Typography>
          {/* <Button>Sign in today!</Button> */}
        </Box>
        <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          What our providers say
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
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Footer />
    </>
  );
}
