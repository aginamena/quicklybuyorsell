import { Paper, Typography, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";

export default function Contact({ title, amount }) {
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });

  return (
    <Paper style={{ padding: "30px" }}>
      <Typography
        variant="h4"
        style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
      >
        {title}{" "}
      </Typography>
      <Typography
        variant="h5"
        style={{ marginBottom: "30px", marginTop: "30px" }}
      >
        {formattedAmount}
      </Typography>
      <Typography
        style={{ color: "#dedede", marginBottom: "15px", textAlign: "center" }}
      >
        Contact the seller
      </Typography>
      <Link
        to="https://wa.me/2348100000000"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#25d366",
          border: "1px solid #25d366",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "50px",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <Typography variant="h6" style={{ marginRight: "10px" }}>
          WhatsApp
        </Typography>
        <WhatsAppIcon />
      </Link>
    </Paper>
  );
}
