import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import currencyFormatter from "currency-formatter";
import PropTypes from "prop-types";

export default function Displaycard({ imagePath, title, amount }) {
  const maximumLengthOfTitle = 17;
  const maximumLengthOfAmount = 15;
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });
  return (
    <Card sx={{ width: 200 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        image={imagePath}
        alt="Display card"
        style={{ height: 150 }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "16px", wordWrap: "break-word" }}
        >
          {title.length > maximumLengthOfTitle
            ? title.substring(0, maximumLengthOfTitle) + "..."
            : title}
        </Typography>
        <Typography variant="h6" component="div">
          {formattedAmount.length > maximumLengthOfAmount
            ? formattedAmount.substring(0, maximumLengthOfAmount) + "..."
            : formattedAmount}
        </Typography>
      </CardContent>
    </Card>
  );
}

Displaycard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};
