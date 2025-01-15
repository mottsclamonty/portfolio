import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
};

export default Heading;
