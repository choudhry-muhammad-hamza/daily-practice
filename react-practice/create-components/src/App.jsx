import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Button from "./components/Button";
import Hello from "./components/Hello";
import Random from "./components/Random";
import "./App.css";

function App() {
  return (
    <>
      <h1>My Name Is Muhammad Hamza.</h1>
      <br />
      <Hello></Hello>
      <Button />
      <Random></Random>
      <br />
      <Random></Random>
      <br />
      <Random></Random>
      <br />
      <Random></Random>
      <br />
      <Random></Random>
      <br />
      <Random></Random>
      <br />
    </>
  );
}

export default App;
