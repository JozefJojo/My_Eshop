import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage,example,onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
        inputProps.name === setFocused(true)
        }
        focused={focused.toString()}
      />
    <span>
    {errorMessage}
    <br />
    {example}
    </span>
    </div>
  );
};

export default FormInput;