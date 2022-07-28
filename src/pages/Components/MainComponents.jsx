import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import classes from "./MainComponents.module.css";

const MainComponents = () => {
  return(
    <div className={classes.container}>
      <Buttons/>
      <div>
        <h2>Inputs</h2>
      </div>
    </div>
  )
}

export default MainComponents