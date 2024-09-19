import AssignmentsNav from "@/components/AssignmentsNav";
import Button from "@/components/Button";
import { useState } from "react";

const Assignment5 = () => {
  const [passed, setPassed] = useState(true);

  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];

  const togglePassed = () => {
    setPassed(!passed);
  };

  const result = students.filter((student) => {
    return student.grade >= 60 == passed;
  });
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">
        5. Filter Students Who {passed ? "Passed" : "Failed"}
      </h1>
      <Button text={passed ? "Passed" : "Failed"} handleClick={togglePassed} />
      <ul className="list-disc pl-5">
        {result.map((student, i) => {
          return (
            <li key={"a5-" + i}>{`${student.name} : ${student.grade} %`}</li>
          );
        })}
      </ul>
      <AssignmentsNav />
    </div>
  );
};

export default Assignment5;
