import React from "react";
import "./Dashboard.scss";
import Links from "../../components/Links/Links";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
function Dashboard() {
  const linksArray = [
    {
      name: "Post",
      description: "Post component example with likes and comments",
      link: "/post",
      img: "https://sun9-58.userapi.com/impg/JtHaSc1ywBCSCNtM58miMj3MMVYcUuO-G9DU2Q/IxO8b90i8q8.jpg?size=769x960&quality=96&sign=57eed7596e63043f6171166f776d7513&type=album",
    },
    {
      name: "ChatApp",
      description: "Chat app example",
      link: "/demo",
      img: "https://sun9-73.userapi.com/impg/fqi_nlpZKdSBwYi1YhNTuj_V_n_WRrqBiiLIPQ/6uVvFP4JlSQ.jpg?size=747x934&quality=96&sign=a8e4f725315f448d1c501b7e298ac50b&type=album",
    },
    {
      name: "Audio",
      description: "Audio player sandbox",
      link: "/demo",
      img: "https://sun9-27.userapi.com/impg/8PaBc4ZfY1FD19uGLlMxngwpyGJoOHxbwn0wIA/AinlDg6J7LM.jpg?size=772x960&quality=96&sign=ff3c93736ca143379313d472f1f87678&type=album",
    },
    {
      name: "test",
      description: "test test test",
      link: "/demo",
      img: "https://sun9-5.userapi.com/impg/UkIWxBrAR3bGtPcDzmHIYXwduKzyIjACyVG3jQ/-llK08sdVS0.jpg?size=768x960&quality=96&sign=7751926526f41b04863ac1c3f75bea83&type=album",
    },
    {
      name: "demo",
      description: "test test test",
      link: "/demo",
      img: "https://sun9-82.userapi.com/impg/39twHm-FO0IMPMwxNHfBamMPm9IIf23scpbV3A/uMWLrJfRF80.jpg?size=795x960&quality=96&sign=87758186c3e0b7ecc09b0c960425140c&type=album",
    },
    {
      name: "test",
      description: "test test test",
      link: "/demo",
      img: "https://sun9-13.userapi.com/impg/82eyyvXEyWjTCn4AGkkJBeqjuRW0j277SEegUw/g6auBttyTIs.jpg?size=770x960&quality=96&sign=02371721ce4e64cb2e872208f0eed620&type=album",
    },
    {
      name: "test",
      description: "test test test",
      link: "/demo",
      img: "https://sun9-87.userapi.com/impg/jplKThbJ7j8iFPCzERyEHiqOt5_POzSLsENb8w/cKf9HRevzQo.jpg?size=771x960&quality=96&sign=d0e8bb4e10914c4f636725c9bf52b43a&type=album",
    },
    {
      name: "test",
      description: "test test test",
      link: "/demo",
      img: "https://sun9-55.userapi.com/impg/279pbzXR92Lp0tN98dHP5PKmykD6TOMLn9-iuQ/pDeu1tU_khU.jpg?size=771x960&quality=96&sign=b2cc5c794203b0ec4ef6c699b3575c84&type=album",
    },
    {
      name: "test",
      description: "test test test",
      link: "/demo",
      img: "https://sun9-57.userapi.com/impg/MEvWydMXbiGRQqvcaoqr__yHjN0lG7RD_K42Kg/TIXw8ZGCCi4.jpg?size=768x960&quality=96&sign=ae70088c6fffb92532c0d05c912c53e3&type=album",
    },
  ];

  return (
    <div className="container">
      <Header />
      <Links linksArray={linksArray} />
      <About />
      <Footer />
    </div>
  );
}

export default Dashboard;
