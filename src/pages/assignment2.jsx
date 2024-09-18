const Assignment2 = () => {
  const array = ["apple", "banana", "kiwi", "pear"];
  const n = 4;

  const result = array.filter((fruit) => {
    return fruit.length > n;
  });

  return (
    <div>
      <div>Filter Strings by Length</div>
      <ul className="list-disc pl-5">
        {result.map((fruit) => {
          return <li>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export default Assignment2;
