import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TableCell from './TableCell';
import ChildComp1 from './childs/ChildComp1';

function App(props: any) {

  const [state, setState] = useState({ color: "red", color1: 'green' })

  const [count, setCount] = useState(0)

  const updateCount = () => {
    console.log("updateCount")
    const numbers = [3, 4, 5, 6, 7, 8]
    numbers.forEach((v) => {
      console.log("Count: ", count)
      console.log("current input: ", v)
      setCount((v1) => v1 + v)
    })

    // setCount(count + numbers[0])
      //count 0
    // setCount(count + numbers[1])
      //count 0
    // setCount(count + numbers[2])
      //count 0
    // setCount(count + numbers[3])
      //count 0
    // setCount(count + numbers[4])
    //count 0
    // setCount(count + numbers[5])
    //change after

    console.log(count)
  }
  //count changed
  return (
    <div className="App">
      {/* {props.testprop}
      <ChildComp1 testprop1={props.testprop} testprop11={props.testprop} /> */}


      <div>Count: {count}</div>
      <button onClick={() => updateCount()}>Click</button>
    </div>
  );
}

export default App;
