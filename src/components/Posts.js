import React from "react";
import Spinner from "../Spinner/Spinner.gif";

const Posts = ({ posts, loading }) => {
  let showPosts;
  if (loading) {
    showPosts = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img src={Spinner} alt="Loading" />
      </div>
    );
  } else {
    showPosts = (
      <ul className="list-group my-4">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    );
  }

  return <div>{showPosts}</div>;
};

export default Posts;
