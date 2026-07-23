import React from "react";
import Component1 from "./Component1";
import { counterContext } from "../context/context";
import { useContext } from "react";

const Button = () => {
  const value = useContext(counterContext);
  return (
    <button onClick={() => value.setCount((count) => count + 1)}>
      <span>
        <Component1 />
      </span>
      i am a button.
    </button>
  );
};

export default Button;
