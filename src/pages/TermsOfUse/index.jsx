// import { Container, Toolbar, Typography } from "@mui/material";

// export default function TermsOfUse() {
//   return (
//     <Container>
//       <Toolbar />
//       <Typography variant="h5">Terms of use</Typography>
//     </Container>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container, Toolbar, Box } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function TermsOfUse() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container style={{ marginBottom: "40px" }}>
      <Toolbar />
      <Typography variant="h4" style={{ marginBottom: "30px" }}>
        Terms of use
      </Typography>
      <Box style={{ marginBottom: "30px" }}>
        <Typography> Last Updated: November 13th, 2023</Typography>
        <Typography style={{ marginTop: "20px", marginBottom: "20px" }}>
          Welcome to Top fashion products!
        </Typography>
        <Typography>
          Please read these Terms of Use ("Terms") carefully before using Top
          fashion products.
        </Typography>
      </Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content">
          <Typography>Acceptance of Terms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the Service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content">
          <Typography>Use of the Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            (1) You must be at least 16 years old to use the Service or operated
            by your guardian if you are less than 16
          </Typography>
          <Typography>
            (2) You are responsible for maintaining the confidentiality of your
            account.
          </Typography>
          <Typography>
            (3) You agree to accept responsibility for all activities that occur
            under your account.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content">
          <Typography> Listings and Transactions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            (1) Users are solely responsible for the accuracy and content of
            their listings.
          </Typography>
          <Typography>
            (2) All transactions are solely between the buyer and seller. We are
            not a party to any transaction.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content">
          <Typography> Prohibited Conduct</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            (1) Violating any applicable laws or regulations.
          </Typography>
          <Typography>
            (2) Posting false, misleading, or inappropriate content.
          </Typography>
          <Typography>
            (3) Interfering with the proper working of the Service.
          </Typography>
          <Typography>
            (4) Attempting to access data not intended for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content">
          <Typography> Intellectual Property</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            (1) All content on the Service is the property of Top fashion
            products and is protected by copyright, trademark, and other
            intellectual property laws.
          </Typography>
          <Typography>
            (2) By submitting content to the Service, you grant us a
            non-exclusive, royalty-free, perpetual, irrevocable, and fully
            sublicensable right to use, reproduce, modify, adapt, publish,
            translate, create derivative works from, distribute, and display
            such content.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6-content">
          <Typography> Termination</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We reserve the right to terminate or suspend your account
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach the Terms.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content">
          <Typography> Disclaimer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Service is provided on an "as is" and "as available" basis. We
            do not warrant that the Service will be uninterrupted, timely,
            secure, or error-free.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content">
          <Typography>Change of use</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We reserve the right to modify or replace these Terms at any time.
            Your continued use of the Service after any such changes constitute
            your acceptance of the new Terms.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
