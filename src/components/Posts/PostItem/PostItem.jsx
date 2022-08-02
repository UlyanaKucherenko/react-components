import React from "react";
import classes from "./PostsItem.module.css";
import {Link} from "react-router-dom";

const PostItem = ({post}) => {
  return (
    <Link to={`/posts/${post.id}`} className={classes.post}>
      <div>{post.id}</div>
      <div><b>user:</b> {post.userId}</div>
      <div><b>title:</b> {post.title}</div>
      <div><b>body:</b> {post.body}</div>
    </Link>
  )
}

export default PostItem