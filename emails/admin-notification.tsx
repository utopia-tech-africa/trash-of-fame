import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AdminNotificationEmailProps {
  fullName: string;
  email: string;
  phone?: string;
  interest: string;
  message?: string;
}

export const AdminNotificationEmail = ({
  fullName,
  email,
  phone,
  interest,
  message,
}: AdminNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>New Inquiry: {interest}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Section style={section}>
          <Text style={label}>Full Name</Text>
          <Text style={value}>{fullName || "No full name provided."}</Text>

          <Text style={label}>Email Address</Text>
          <Text style={value}>{email || "No email provided."}</Text>

          <Text style={label}>Phone Number</Text>
          <Text style={value}>{phone || "No phone number provided."}</Text>

          <Text style={label}>Interest</Text>
          <Text style={value}>{interest || "No interest provided."}</Text>

          <Hr style={hr} />

          <Text style={label}>Message</Text>
          <Text style={value}>{message || "No message provided."}</Text>
        </Section>
        <Text style={footer}>Sent from Trash of Fame Website</Text>
      </Container>
    </Body>
  </Html>
);

export default AdminNotificationEmail;

const main = {
  backgroundColor: "#0f0a06",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#1a120b",
  margin: "0 auto",
  padding: "40px 20px",
  borderRadius: "8px",
  border: "1px solid #654829",
  maxWidth: "600px",
};

const h1 = {
  color: "#fff8f1",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
  textTransform: "uppercase" as const,
};

const section = {
  padding: "20px",
  backgroundColor: "#0f0a06",
  borderRadius: "5px",
  border: "1px solid #654829",
};

const label = {
  fontSize: "12px",
  color: "#654829",
  textTransform: "uppercase" as const,
  fontWeight: "bold",
  letterSpacing: "0.5px",
  margin: "10px 0 0",
};

const value = {
  fontSize: "16px",
  color: "#fff8f1",
  margin: "0 0 15px",
};

const hr = {
  borderColor: "#654829",
  margin: "20px 0",
};

const footer = {
  color: "#654829",
  fontSize: "14px",
  textAlign: "center" as const,
  marginTop: "30px",
};
