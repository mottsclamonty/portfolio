import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactEmailProps = {
  message: string;
  sender: string;
};

export const ContactEmail: React.FC<ContactEmailProps> = ({
  message,
  sender,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from connorlamont.dev</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
