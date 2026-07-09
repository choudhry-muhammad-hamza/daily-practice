import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  //case 1 : Run on every render
  useEffect(() => {
    alert("i will run on every render");
  });

  //case 2 : Run only on first render
  useEffect(() => {
    alert("i will run only on first render");
  }, []);

  //case 3 : Run only when certain values changed
  useEffect(() => {
    alert("i will run every time when color was changed ");
  }, [color]);

  //example of cleanup function

  return <div>{color} Navbar</div>;
};

export default Navbar;
