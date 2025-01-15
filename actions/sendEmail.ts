"use server";
import React from "react";
import { getErrorMessage } from "@/lib/utils/getErrorMessage";
import { validateString } from "@/lib/utils/validateString";
import { Resend } from "resend";
import { ContactEmail } from "@/email/ContactEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get("email");
  const message = formData.get("message");

  // lazy validation
  if (!validateString(sender, 500)) {
    return {
      error: "Invalid sender email format",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message format",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "connor@connorlamont.dev",
      subject: "Message from Contact Form",
      replyTo: sender as string,
      react: React.createElement(ContactEmail, {
        message: message as string,
        sender: sender as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
