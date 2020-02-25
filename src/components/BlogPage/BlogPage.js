import React from "react";
import Footer from "../Footer/Footer";

const BlogPage = props => {
  return (
    <div>
      <p>{props.location.title}</p>
      <p>{props.location.date}</p>
      <p>{props.location.data}</p>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default BlogPage;
