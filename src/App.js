import React, { useState } from "react";
import Counter from "./components/Counter";
import { Paragraph } from "./components/Paragraph";
import Tabliza from "./components/Tabliza";

const App = () => {
  // ----------------task1
  let [counter, setCounter] = useState(0);

  function decrement() {
    setCounter(counter - 1);
  }

  function increment() {
    setCounter(counter + 1);
  }
  // ------------------task2

  let [inputValue, setInpValue] = useState("");
  let perem = "";

  function inpData(e) {
    perem = e.target.value;
  }
  function saveAdd() {
    setInpValue(perem);
  }
  // --------------------task3

  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },

    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ];

  return (
    <div>
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Paragraph inpData={inpData} saveAdd={saveAdd} />
      <p>{inputValue}</p>
      <Tabliza employees={employees} />
    </div>
  );
};

export default App;
