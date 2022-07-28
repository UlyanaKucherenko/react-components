import React from "react";
import classes from "./RButton.module.css";
import clsx from 'clsx';

const RButton = ({text, variant, disable, color, size, startIcon, endIcon}) => {

  return (
    <button
      type="button"
      className={
        clsx(
          classes.base,
          classes[variant],
          disable ? classes.disable : '',
          color ? classes[`${color}`] : '',
          size ? classes[`size-${size}`] : '',
        )
      }
    >
      {startIcon ? startIcon : ''}
      {text}
      {endIcon ? endIcon : ''}

    </button>
  )
}

export default RButton