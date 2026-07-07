import styles from "./FoodItem.module.css";

const FoodInput = ({ value, onChange, handleKeyDown }) => {
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter your Food Item Here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
      onChange={onChange}
      value={value}
    />
  );
};

export default FoodInput;
