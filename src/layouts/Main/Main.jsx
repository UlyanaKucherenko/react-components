import React from "react";
import MainComponents from "../../pages/MainComponents/MainComponents";
import {Routes, Route} from "react-router-dom";
import Posts from "../../pages/Posts/Posts";
import classes from "./Main.module.css";
import PostPage from "../../pages/PostPage/PostPage";

const Main = () => {
  return(
    <div className={classes.container }>
      <Routes>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostPage/>} />
        <Route exact path="/components" element={<MainComponents />} />
      </Routes>
    </div>
  )
}

export default Main