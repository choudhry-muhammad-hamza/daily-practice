import FruitItems from "./components/FruitItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import styles from "./components/Item.module.css";
import { useState } from "react";
import "./App.css";

function App() {
  let fruitItems = [
    "Apple",
    "Banana",
    "Mango",
    "Peach",
    "Guava",
    "Lechi",
    "Pineapple",
  ];

  let textStateArr = useState("food item entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  console.log(`current value of state : ${textToShow}`);
  console.log(`current value of state : ${setTextState}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className={styles.heading}>Healthy Fruits</h1>
        <ErrorMessage fruitItems={fruitItems} />
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>

        <FruitItems fruitItems={fruitItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health aand
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
