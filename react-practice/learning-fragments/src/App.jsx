import FruitItems from "./components/FruitItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import styles from "./components/Item.module.css";
import { useState } from "react";
import "./App.css";
import { SiBuymeacoffee } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function App() {
  // let fruitItems = [
  //   "Apple",
  //   "Banana",
  //   "Mango",
  //   "Peach",
  //   "Guava",
  //   "Lechi",
  //   "Pineapple",
  // ];

  let [textToShow, setTextState] = useState("");
  let [fruitItems, setFoodItems] = useState([]);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setTextState(value);
    console.log("Typing :", value);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = textToShow;
      if (newFoodItem.trim() !== "") {
        let newItems = [...fruitItems, newFoodItem];
        setFoodItems(newItems);
        console.log("Added :", newFoodItem);
        setTextState("");
      }
    }
  };

  return (
    <>
      <Container>
        <h1 className={styles.heading}>Healthy Fruits</h1>
        <ErrorMessage fruitItems={fruitItems} />
        <FoodInput
          handleKeyDown={onKeyDown}
          onChange={handleOnChange}
          value={textToShow}
        ></FoodInput>
        <p className="p">{textToShow}</p>
        <FruitItems fruitItems={fruitItems} />
        <SiBuymeacoffee />
        <FaLinkedin />
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
