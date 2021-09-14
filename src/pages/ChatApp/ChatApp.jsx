import React from "react";
import "./ChatApp.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Chat from "../../components/Chat/Chat";
function ChatApp() {
  return (
    <div className="container__chatapp">
      <Header title="ChatApp" />
      <Chat />
      <Footer />
    </div>
  );
}

export default ChatApp;
