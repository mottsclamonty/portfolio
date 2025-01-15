import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs">&copy; 2025 Connor Lamont. All rights reserved.</small>
      <p className="text-xs">
        <span className="font-bold">Technologies used to build this site:</span>{" "}
        React, Next.js (App Router, Server Components, Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email,
        Resend, hosted on Vercel.
      </p>
    </footer>
  );
};

export default Footer;
