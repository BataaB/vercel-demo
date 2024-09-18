const Assignment5 = () => {
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];

  const result = students.filter((student) => {
    return student.grade >= 60;
  });
  return (
    <div>
      <div>Filter Students Who Passed</div>
      <ul className="list-disc pl-5">
        {result.map((student) => {
          return <li>{`${student.name} : ${student.grade}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Assignment5;
