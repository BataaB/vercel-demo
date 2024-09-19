import AssignmentsNav from "@/components/AssignmentsNav";

const Assignment3 = () => {
  const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Tom", age: 15 },
    { name: "Emma", age: 30 },
  ];

  const result = people.filter((person) => {
    return person.age > 18;
  });
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">3. Filter Objects by Property</h1>
      <ul className="list-disc pl-5">
        {result.map((person, i) => {
          return <li key={"a3-" + i}>{`${person.name} : ${person.age}`}</li>;
        })}
      </ul>
      <AssignmentsNav />
    </div>
  );
};

export default Assignment3;
