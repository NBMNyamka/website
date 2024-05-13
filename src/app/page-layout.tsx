import Footer from "@/components/footer/Footer";
import { NavBar } from "@/components/nav";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col" id="app-container">
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
