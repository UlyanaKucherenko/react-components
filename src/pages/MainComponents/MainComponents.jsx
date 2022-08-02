import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import classes from "./MainComponents.module.css";
import Inputs from "../../components/Inputs/Inputs";

const MainComponents = () => {
  return(
    <div className={classes.container}>
      <Buttons/>
      <Inputs />
    </div>
  )
}

export default MainComponents