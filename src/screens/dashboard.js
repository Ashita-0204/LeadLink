import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Default from "../components/Default";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Default />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
