import { Box, Container, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  AccordionCmp,
  AccordionDetailsCmp,
  AccordionSummaryCmp,
} from "./style";

export default function TermsOfUse() {
  const [expanded, setExpanded] = useState("panel1");

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
          Welcome to Quickly Buy or Sell (QBOS)!
        </Typography>
        <Typography>
          Please read these Terms of Use ("Terms") carefully before using QBOS.
        </Typography>
      </Box>
      <AccordionCmp
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummaryCmp aria-controls="panel1d-content">
          <Typography>Acceptance of Terms</Typography>
        </AccordionSummaryCmp>
        <AccordionDetailsCmp>
          <Typography>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the Service.
          </Typography>
        </AccordionDetailsCmp>
      </AccordionCmp>
      <AccordionCmp
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummaryCmp aria-controls="panel2d-content">
          <Typography>Use of the Service</Typography>
        </AccordionSummaryCmp>
        <AccordionDetailsCmp>
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
        </AccordionDetailsCmp>
      </AccordionCmp>
      <AccordionCmp
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummaryCmp aria-controls="panel3d-content">
          <Typography> Listings and Transactions</Typography>
        </AccordionSummaryCmp>
        <AccordionDetailsCmp>
          <Typography>
            (1) Users are solely responsible for the accuracy and content of
            their listings.
          </Typography>
          <Typography>
            (2) All transactions are solely between the buyer and seller. We are
            not a party to any transaction.
          </Typography>
        </AccordionDetailsCmp>
      </AccordionCmp>
      <AccordionCmp
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummaryCmp aria-controls="panel4d-content">
          <Typography> Prohibited Conduct</Typography>
        </AccordionSummaryCmp>
        <AccordionDetailsCmp>
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
        </AccordionDetailsCmp>
      </AccordionCmp>
      <AccordionCmp
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummaryCmp aria-controls="panel5d-content">
          <Typography> Intellectual Property</Typography>
        </AccordionSummaryCmp>
        <AccordionDetailsCmp>
          <Typography>
            (1) All content on the Service is the property of QBOS and is
            protected by copyright, trademark, and other intellectual property
            laws.
          </Typography>
          <Typography>
            (2) By submitting content to the Service, you grant us a
            non-exclusive, royalty-free, perpetual, irrevocable, and fully
            sublicensable right to use, reproduce, modify, adapt, publish,
            translate, create derivative works from, distribute, and display
            such content.
          </Typography>
        </AccordionDetailsCmp>
      </AccordionCmp>
      <AccordionCmp
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummaryCmp aria-controls="panel6-content">
          <Typography> Termination</Typography>
        </AccordionSummaryCmp>
        <AccordionDetailsCmp>
          <Typography>
            We reserve the right to terminate or suspend your account
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach the Terms.
          </Typography>
        </AccordionDetailsCmp>
      </AccordionCmp>
      <AccordionCmp
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummaryCmp aria-controls="panel7d-content">
          <Typography> Disclaimer</Typography>
        </AccordionSummaryCmp>
        <AccordionDetailsCmp>
          <Typography>
            The Service is provided on an "as is" and "as available" basis. We
            do not warrant that the Service will be uninterrupted, timely,
            secure, or error-free.
          </Typography>
        </AccordionDetailsCmp>
      </AccordionCmp>
      <AccordionCmp
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummaryCmp aria-controls="panel8d-content">
          <Typography>Change of use</Typography>
        </AccordionSummaryCmp>
        <AccordionDetailsCmp>
          <Typography>
            We reserve the right to modify or replace these Terms at any time.
            Your continued use of the Service after any such changes constitute
            your acceptance of the new Terms.
          </Typography>
        </AccordionDetailsCmp>
      </AccordionCmp>
    </Container>
  );
}
