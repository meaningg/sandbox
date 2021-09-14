import React from "react";
import Demo from "../../components/demo/Demo";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./DemoPage.scss";
function DemoPage() {
  return (
    <div className="container__demoPage">
      <Header />
      <Demo />
      <Footer />
    </div>
  );
}

export default DemoPage;
