import classes from "./RSelect.module.css";
import {FormControl, Select, InputLabel, MenuItem} from "@material-ui/core";

const RSelect = ({label, value, onChange, options}) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={onChange}
      >
        {
          options.map((option) =>
            <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
          )}
      </Select>
    </FormControl>
  )
}

export default RSelect