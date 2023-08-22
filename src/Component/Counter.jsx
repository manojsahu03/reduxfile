import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  amount,
  decrement,
  increment,
  incrementAsync,
} from "../Redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  return (
    <div>
      <TextField
        type="number"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <h2> {count}</h2>
      <Button variant="contained" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>
        -
      </Button>
      <Button variant="contained" onClick={() => dispatch(amount(10))}>
        amount
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch(incrementAsync(Number(input)))}
      >
        {" "}
        Async
      </Button>
    </div>
  );
}

export default Counter;
