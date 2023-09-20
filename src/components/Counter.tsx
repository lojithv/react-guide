import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/counterSlice';


function Counter() {
  const count = useSelector((state:any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default Counter;