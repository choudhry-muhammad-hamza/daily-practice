import FruitItems from "./components/FruitItems";
import ErrorMessage from "./components/ErrorMessage";
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

  return (
    <>
      <h1>Healthy Fruits</h1>
      <ErrorMessage fruitItems={fruitItems} />
      <FruitItems fruitItems={fruitItems} />
    </>
  );
}

export default App;
