import classes from "./QuotesItem.module.css";
import React from "react";

const QuotesItem = ({quote}) => {
  return (
    <div className={classes.item}>
      <div>{quote.quoteText}</div>
    </div>
  )
}

export default QuotesItem
