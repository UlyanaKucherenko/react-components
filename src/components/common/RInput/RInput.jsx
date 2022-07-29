import React from "react";
import classes from "./RInput.module.css";
import clsx from "clsx";

const RInput = ({label, type, placeholder, value, onChange, error, helperText, disabled, size, fullwidth, startIcon, endIcon}) => {
  return(
    <label className={clsx(
      classes.label,
      size ? classes[`size-${size}`]: '',
    )}>
      <span className={classes.labelText}>{label}</span>
      {startIcon ? <div className={classes.iconL}>{startIcon}</div> : ''}
      {endIcon ? <div className={classes.iconR}>{endIcon}</div> : ''}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={value}
        onChange={onChange}
        className={
        clsx(
          classes.base,
          error ? classes.error: '',
          disabled ? classes.disabled: '',
          fullwidth ? classes.fullwidth: '',
          startIcon ? classes.startIcon: '',
          endIcon ? classes.endIcon: '',
          )
      }
      />
      <span className={
        clsx(
          classes.helperText,
          error ? classes.error: ''
        )
       }
      >
        {helperText}
      </span>
    </label>
  )
}

export default RInput;