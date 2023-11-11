import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export default function HowItWorksCard({ title, imagePath }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagePath}
          alt={title}
          role="image"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

HowItWorksCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};
