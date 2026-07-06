import Item from "./Item";

const FruitItems = ({ fruitItems }) => {
  return (
    <ul className="list-group">
      {fruitItems.map((item) => (
        <Item key={item} fruitItem={item} />
      ))}
    </ul>
  );
};

export default FruitItems;
