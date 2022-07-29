import React from "react";
import RButton from "../common/RButton/RButton";
import classes from "./Buttons.module.css";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const Buttons = () => {

  const names = {
    "base": "<RButton />",
    "outline": '<RButton variant="outline"/>',
    "text": '<RButton variant="text">',
    "disable": "<RButton disable/>",
    "primary": '<RButton color="primary"/>',
    "secondary": '<RButton color="secondary"/>',
    "danger": '<RButton color="danger"/>',
    "startIcon": '<RButton startIcon={<AddIcon/>}/>',
    "endIcon": '<RButton startIcon={<DeleteIcon/>}/>',
    "smSize": '<RButton size="sm"/>',
    "mdSize": '<RButton size="md"/>',
    "lgSize": '<RButton size="lg"/>',
  }

  function onClick () {
    console.log('click BTN')
  }

  return (
    <div className={classes.container}>
      <h2>Buttons</h2>
      <div className={classes.content}>
        <div className={classes.element}>
          <RButton
            text="Default"
            onClick={onClick}
          />
          <div className={classes.name}>{names.base}</div>
        </div>
        <div className={classes.element}>
          <RButton
            text="Outline"
            variant="outline"
          />
          <div className={classes.name}>{names.outline}</div>
        </div>
        <div className={classes.element}>
          <RButton
            text="Text"
            variant="text"
          />
          <div className={classes.name}>{names.text}</div>
        </div>
        <div className={classes.element}>
          <RButton text="disable" disable/>
          <div className={classes.name}>{names.disable}</div>
        </div>
        <div className={classes.element}>
          <RButton text="size" size="sm"/>
          <div className={classes.name}>{names.smSize}</div>
        </div>
        <div className={classes.element}>
          <RButton text="size" size="md"/>
          <div className={classes.name}>{names.mdSize}</div>
        </div>
        <div className={classes.element}>
          <RButton text="size" size="lg"/>
          <div className={classes.name}>{names.lgSize}</div>
        </div>
        <div className={classes.element}>
          <RButton text="primary" color="primary"/>
          <div className={classes.name}>{names.primary}</div>
        </div>
        <div className={classes.element}>
          <RButton text="secondary" color="secondary"/>
          <div className={classes.name}>{names.secondary}</div>
        </div>
        <div className={classes.element}>
          <RButton text="danger" color="danger"/>
          <div className={classes.name}>{names.danger}</div>
        </div>
        <div className={classes.element}>
          <RButton text="add" startIcon={<AddIcon/>} color="primary" size="lg"/>
          <div className={classes.name}>{names.startIcon}</div>
        </div>
        <div className={classes.element}>
          <RButton
            text="delete"
            endIcon={<DeleteIcon/>}
            color="danger"
            size="lg"
          />
          <div className={classes.name}>{names.endIcon}</div>
        </div>
      </div>
    </div>
  )
}

export default Buttons