import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function Displaycard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        image="https://res.cloudinary.com/kusnap/image/upload/w_300,f_auto/v1697885230/z10afyjwzhbym0znpxut.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "16px" }}
        >
          this is a titlethis is a titlethis is a titlethis is a titlethis is a
        </Typography>
        <Typography variant="h6" component="div">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="card/naira.png" style={{ width: "25px" }} />
            <div> 123,000</div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
