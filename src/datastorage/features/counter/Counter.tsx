import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset, incremetByAmount } from "./counterSlice";
import { RootState } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [countAmount, setCountAmount] = useState(0);

  const getCountAmount = (e: { target: { value: string } }) => {
    setCountAmount(parseFloat(e.target.value));
  };

  // const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const resetAll = () => {
    setCountAmount(0);
    // dispatch(reset());
  };

  return (
    <div></div>
    // <section>
    //   <p>{count}</p>
    //   <div>
    //     <button onClick={() => dispatch(increment())}>add</button>
    //     <button onClick={() => dispatch(decrement())}>substract</button>
    //     <button onClick={() => resetAll()}>reset</button>
    //     <button onClick={() => dispatch(incremetByAmount(countAmount))}>
    //       increment by amount
    //     </button>
    //   </div>
    //   <div>
    //     <input
    //       type="number"
    //       value={countAmount}
    //       onChange={getCountAmount}
    //     ></input>
    //   </div>
    // </section>
  );
};

export default Counter;
