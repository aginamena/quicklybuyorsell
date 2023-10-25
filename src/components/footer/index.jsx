import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button } from "@mui/material";

import React from "react";

import { useNavigate } from "react-router-dom";
import { FooterCmp, LinkCmp } from "./style";

function Footer() {
  const navigate = useNavigate();
  return (
    <FooterCmp>
      <Box>
        <Button style={{ color: "white" }} onClick={() => navigate("aboutus")}>
          About us
        </Button>
        <Button style={{ color: "white" }} onClick={() => navigate("faqs")}>
          FAQs
        </Button>
        <Button
          style={{ color: "white" }}
          onClick={() => navigate("contactus")}
        >
          Contact us
        </Button>
      </Box>
      <Box>
        <LinkCmp href="https://www.linkedin.com/company/joinedafrica/">
          <LinkedInIcon />
        </LinkCmp>
        <LinkCmp href="https://www.instagram.com/joinedafrica/">
          <InstagramIcon />
        </LinkCmp>
        <LinkCmp href="https://www.facebook.com/JoinedAfrica">
          <FacebookIcon />
        </LinkCmp>
        <LinkCmp href="https://www.youtube.com/@JoinedAfrica/">
          <YouTubeIcon />
        </LinkCmp>
      </Box>
    </FooterCmp>
  );
}

export default Footer;
