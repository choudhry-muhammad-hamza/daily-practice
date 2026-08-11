import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("Hamza");
  const [form, setForm] = useState({ email: "", phone: "" });

  const handleClick = () => {
    console.log("i am clicked");
  };

  let handleMouseOver = () => {
    console.log("i am in a red div.");
  };

  let handleChange = (e) => {
    // setName(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="red" onMouseOver={handleMouseOver}>
        i am red div.
      </div>
      <input
        type="text"
        name="email"
        placeholder="Enter Email ..."
        value={form.email ? form.email : ""}
        onChange={handleChange}
      />{" "}
      <br />
      {/* <br /> */}
      <input
        type="text"
        name="phone"
        placeholder="Enter Phone number ..."
        value={form.phone ? form.phone : ""}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
