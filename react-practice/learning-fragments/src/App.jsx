import "./App.css";

function App() {
  let fruitItems = ["Apple", "Banana", "Mango", "Peach", "Guava", "lechi"];
  // let fruitItems = [];

  return (
    <>
      <h1>Healthy Fruits</h1>
      {fruitItems.length === 0 && <h3>i am still hungry.</h3>}
      <ul className="list-group">
        {fruitItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
