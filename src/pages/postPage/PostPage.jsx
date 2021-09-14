import React from "react";
import Header from "../../components/header/Header";
import Comments from "../../components/comments/Comments";
import Footer from "../../components/footer/Footer";
function PostPage() {
  return (
    <div>
      <Header title="PostDemo" />
      <Comments />
      <Footer />
    </div>
  );
}

export default PostPage;
