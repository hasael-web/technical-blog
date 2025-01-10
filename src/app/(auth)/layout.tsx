import React from "react";
import Container from "../__components/Container";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Container className="flex justify-center items-center">
        {children}
      </Container>
    </div>
  );
};

export default RootLayout;
