import AssignmentsNav from "@/components/AssignmentsNav";
import Button from "@/components/Button";
import { useState } from "react";

const Assignment1 = () => {
  const [isEven, setIsEven] = useState(true);

  const array = [1, 2, 3, 4, 5, 6];
  const evenNumberArray = array.filter((number) => {
    return number % 2 == isEven ? 1 : 0;
  });

  const toggleIsOdd = () => {
    setIsEven(!isEven);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">1. Filter Even Numbers</h1>
      <Button text={"Toggle"} handleClick={toggleIsOdd} />
      <ul className="list-disc pl-5">
        {evenNumberArray.map((number, i) => {
          return <li key={"a1-" + i}>{number}</li>;
        })}
      </ul>
      <AssignmentsNav />
    </div>
  );
};

export default Assignment1;
