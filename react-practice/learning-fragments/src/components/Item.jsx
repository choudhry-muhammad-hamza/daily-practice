import styles from "./Item.module.css";
const Item = ({ fruitItem }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>{fruitItem}</li>
  );
};

export default Item;
