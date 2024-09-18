const Assignment1 = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const evenNumberArray = array.filter((number) => {
    return number % 2 == 0;
  });

  return (
    <div>
      <div>
        Filter Even Numbers
        <ul className="list-disc pl-5">
          {evenNumberArray.map((number) => {
            return <li>{number}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Assignment1;
