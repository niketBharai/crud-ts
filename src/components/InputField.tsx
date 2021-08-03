import React from "react";

const InputField: React.FC = () => {
  return (
    <form className="input">
      <input placeholder="Add whatever you want!" className="inputBox" />
      <button type="button" className="btn">
        Add
      </button>
    </form>
  );
};

export default InputField;
