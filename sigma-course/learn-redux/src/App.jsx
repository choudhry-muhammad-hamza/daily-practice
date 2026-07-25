import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  incrementByAmount,
} from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button> <br />
        currently count is {count} <br />
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(6))}>+6</button>
        <button onClick={() => dispatch(multiply(3))}>2x</button>
      </div>
    </>
  );
}

export default App;
