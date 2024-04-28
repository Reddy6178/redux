import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1); // State to hold the increment amount

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementAmount)); // Dispatch with the increment amount as payload
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <br />
        <span>{count}</span>
        <br />
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button aria-label="Increment By amount value" onClick={handleIncrementByAmount}>
          Increment by X value
        </button>
      </div>
    </div>
  )
}