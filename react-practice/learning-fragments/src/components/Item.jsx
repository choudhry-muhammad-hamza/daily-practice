import styles from "./Item.module.css";

const Item = ({ fruitItem, handleBuyButton }) => {
  const buyButtonClicked = (event) => {
    console.log(event);

    console.log(` ${fruitItem} is added to cart.`);
  };
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{fruitItem}</span>
      <button
        className={`${styles.button} btn btn-dark`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
