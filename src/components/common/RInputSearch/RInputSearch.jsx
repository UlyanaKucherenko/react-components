import clsx from "clsx";
import classes from "../RInputSearch/RInputSearch.module.css";

const RInputSearch = ({value, placeholder, onChange}) => {
  return (
    <div className={clsx(classes.content)}>
      <label className={clsx(classes.label)}>
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={value}
          onInput={onChange}
          className={clsx(classes.base)}
        />
      </label>
    </div>
  )
}

export default RInputSearch