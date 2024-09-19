import AssignmentsNav from "@/components/AssignmentsNav";
import Button from "@/components/Button";
import { useState } from "react";

const Assignment2 = () => {
  const [number, setNumber] = useState(0);

  const array = ["apple", "banana", "kiwi", "pear"];
  const options = [2, 4, 5];

  const result = array.filter((fruit) => {
    return fruit.length > number;
  });
  const changeNumber = (newNumber) => {
    setNumber(newNumber);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">
        2. Filter Strings by Length {number}
      </h1>
      {/* <input
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      /> */}
      <div className="flex gap-4">
        {options.map((option) => {
          return (
            <Button
              text={"Set to " + option}
              handleClick={() => changeNumber(option)}
            />
          );
        })}
      </div>
      <ul className="list-disc pl-5">
        {result.map((fruit, i) => {
          return <li key={"a2-" + i}>{fruit}</li>;
        })}
      </ul>
      <AssignmentsNav />
    </div>
  );
};

export default Assignment2;
