import React from "react";
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";



const Sidebar = () => {
  return (
    <nav className={classes.container}>
      <NavLink to="/posts" className={classes.item}>All Posts</NavLink>
      <NavLink to="/components" className={classes.item}>Components</NavLink>
    </nav>
  )
}

export default Sidebar