import classes from "./RSelect.module.css";
import {FormControl, Select, InputLabel, MenuItem} from "@material-ui/core";

const RSelect = ({label, value, onChange}) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={onChange}
      >
        <MenuItem value={1}>User 1</MenuItem>
        <MenuItem value={2}>User 2</MenuItem>
        <MenuItem value={3}>User 3</MenuItem>
      </Select>
    </FormControl>
  )
}

export default RSelect