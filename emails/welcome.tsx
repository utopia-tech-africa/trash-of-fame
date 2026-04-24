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

interface WelcomeEmailProps {
  fullName: string;
}

export const WelcomeEmail = ({ fullName }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Trash of Fame</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome, {fullName}</Heading>
        <Section style={section}>
          <Text style={text}>
            You didn’t just sign up, you stepped into something bigger.
          </Text>
          <Text style={text}>
            Most people see trash and move on. You chose to act.
          </Text>
          <Text style={text}>
            We’ve received your message, our team will review it and get back to
            you with the best way to plug in, whether that’s volunteering,
            contributing, partnering, sponsoring or helping spread the message.
          </Text>
          <Text style={text}>
            You’re now part of a group choosing to act, not ignore.
            <br />
            If someone comes to mind who should be part of this, share it with
            them.
          </Text>
          <Text style={text}>More soon.</Text>
          <Hr style={hr} />
          <Text style={footer}>— Trash of Fame</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#0f0a06",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#1a120b",
  margin: "0 auto",
  padding: "20px 0",
  borderRadius: "8px",
  border: "1px solid #654829",
  maxWidth: "600px",
};

const section = {
  padding: "0 20px",
};

const h1 = {
  color: "#fff8f1",
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0 48px 24px",
  textTransform: "uppercase" as const,
};

const text = {
  color: "#fff8f1",
  fontSize: "16px",
  lineHeight: "26px",
  padding: "0 48px",
  opacity: "0.9",
};

const hr = {
  borderColor: "#654829",
  margin: "20px 0px",
};

const footer = {
  color: "#654829",
  fontSize: "14px",
  fontWeight: "bold",
  padding: "0 48px",
  textAlign: "center" as const,
};
