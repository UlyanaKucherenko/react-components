import React from "react";
import classes from "../Inputs/Inputs.module.css";
import RInput from "../ui/RInput/RInput";
import AddIcon from '@material-ui/icons/Add';

const Inputs = () => {

  const names = {
    "base": "<RInput />",
    "error": '<RInput error />',
    "helperText": '<RInput error helperText="helperText">',
    "disabled": "<RInput disabled/>",
    "value": "<RInput value='value'/>",
    "startIcon": '<RInput startIcon={<AddIcon/>}/>',
    "endIcon": '<RInput endIcon={<AddIcon/>}/>',
    "smSize": '<RInput size="sm"/>',
    "mdSize": '<RInput size="md"/>',
    "fullwidth": '<RInput fullwidth/>',
  }

  function handelInput (event) {
    console.log('input=>', event.target.value)
  }

  return (
    <div className={classes.container}>
      <h2>Inputs</h2>
      <div className={classes.content}>
        <div className={classes.element}>
         <RInput label="label" type="text" placeholder="text" onChange={handelInput} />
          <div className={classes.name}>{names.base}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" error/>
          <div className={classes.name}>{names.error}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" error helperText="helperText"/>
          <div className={classes.name}>{names.helperText}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" disabled/>
          <div className={classes.name}>{names.disabled}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" value="value1"/>
          <div className={classes.name}>{names.value}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" size="sm"/>
          <div className={classes.name}>{names.smSize}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" size="md"/>
          <div className={classes.name}>{names.mdSize}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" fullwidth/>
          <div className={classes.name}>{names.fullwidth}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" size="sm" startIcon={<AddIcon/>}/>
          <div className={classes.name}>{names.startIcon}</div>
        </div>
        <div className={classes.element}>
          <RInput label="label" type="text" placeholder="text" size="sm" endIcon={<AddIcon/>}/>
          <div className={classes.name}>{names.endIcon}</div>
        </div>
      </div>
    </div>
  )
}

export default Inputs