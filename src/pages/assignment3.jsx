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
    <div>
      <div>Filter Objects by Property</div>
      <ul className="list-disc pl-5">
        {result.map((person) => {
          return <li>{`${person.name} : ${person.age}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Assignment3;
