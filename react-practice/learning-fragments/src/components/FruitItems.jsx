import Item from "./Item";
import { useState } from "react";

const FruitItems = ({ fruitItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {fruitItems.map((item) => (
        <Item
          key={item}
          fruitItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={() => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FruitItems;
