import React from "react";
import classes from "./PostsItem.module.css";
import {Link} from "react-router-dom";

const PostItem = ({post}) => {
  return (
    <Link to={`/posts/${post.id}`} className={classes.post}>
      <div>{post.id}</div>
      <div>{post.title}</div>
    </Link>
  )
}

export default PostItem