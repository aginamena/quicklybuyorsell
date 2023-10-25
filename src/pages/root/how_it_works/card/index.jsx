import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function HowItWorksCard({ title, imagePath, description }) {
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
          <Typography gutterBottom component="div" role="title">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" role="description">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
