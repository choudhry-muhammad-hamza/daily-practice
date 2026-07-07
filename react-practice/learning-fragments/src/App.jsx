import FruitItems from "./components/FruitItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import styles from "./components/Item.module.css";
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
      <Container>
        <h1 className={styles.heading}>Healthy Fruits</h1>
        <ErrorMessage fruitItems={fruitItems} />
        <FruitItems fruitItems={fruitItems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health aand
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
