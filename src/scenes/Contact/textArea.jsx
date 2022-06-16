import { useState } from "react";
import "./formInput.css";

const TextareaInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <textarea
        {...inputProps}
        cols={30}
        rows={10}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      
      <span>{errorMessage}</span>  
    </div>
  );
};

export default TextareaInput;