import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Main } from "../components/Main";

const Landing = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
