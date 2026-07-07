import styles from "./FoodItem.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter your Food Item Here"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
