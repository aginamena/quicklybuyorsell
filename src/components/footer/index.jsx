import { Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Link
        to="/terms-of-use"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        Terms of use
      </Link>
      <Link to="/about-us" style={{ color: "white", textDecoration: "none" }}>
        About us
      </Link>
    </Container>
  );
}

export default Footer;
