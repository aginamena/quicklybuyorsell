import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Paper, Typography, Button, Divider, Box } from "@mui/material";
import currencyFormatter from "currency-formatter";
import { getUser } from "pages/util";
import { Link } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Contact({ title, amount, creatorOfProduct }) {
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });
  const currentUser = getUser();

  function handleClick() {
    if (!currentUser) {
      alert("To contact the seller, please sign in to your account.");
      return;
    }
    const message = "Hello, I'm interested in your products!";
    window.open(
      `https://wa.me/${creatorOfProduct.phoneNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }
  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card",
    customer: {
      name: currentUser.displayName,
      phonenumber: currentUser.phoneNumber,
      email: currentUser.email,
    },
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
      // provider_details: {
      //   ...creatorOfProduct,
      // },
    },
    customizations: {
      title: "Sending payment to QBOS",
      description:
        "Every transaction is charged a commission/service fee of 10%",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  function handlePayment() {
    try {
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          closePaymentModal(); // this will close the modal programmatically
        },
        onClose: () => {},
      });
    } catch (error) {
      console.log("an error occured");
      console.log(error);
    }
  }

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
        style={{
          wordBreak: "break-word",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        {formattedAmount}
      </Typography>
      <Typography
        style={{ color: "#dedede", marginBottom: "15px", textAlign: "center" }}
      >
        Contact {creatorOfProduct.displayName}
      </Typography>
      <Link
        onClick={handleClick}
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
      <small>
        Do not have whatsapp? download it{" "}
        <Link to="https://www.whatsapp.com/download" style={{ color: "white" }}>
          here
        </Link>
      </small>
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Button
        variant="outlined"
        style={{
          width: "100%",
          height: "60px",
          margin: "20px 0",
          fontSize: "25px",
        }}
        onClick={handlePayment}
      >
        Make payment
      </Button>
      <Divider sx={{ borderBottomWidth: "5px" }} />
      <Box style={{ color: "#dedede", marginTop: "20px" }}>
        <Typography style={{ textAlign: "center" }} variant="h5">
          Safety tip
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <span style={{ marginRight: "10px" }}>1.</span>
          Use the Make Payment button above for secure transactions; we
          guarantee your safety.
        </Typography>
        <Typography>
          <span style={{ marginRight: "10px" }}>2.</span>
          Check the product carefully, and only make payment when you're sure
          it's what you expected.
        </Typography>
      </Box>
    </Paper>
  );
}
