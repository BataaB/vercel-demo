import AssignmentsNav from "@/components/AssignmentsNav";

const Assignment6 = () => {
  const array = [1, 2, 2, 3, 4, 4, 5];

  const temp = [];

  const result = array.filter((item) => {
    if (!temp.includes(item)) {
      temp.push(item);
      return true;
    }
    return false;
  });
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">6. Filter Out Duplicate Numbers</h1>
      <ul className="list-disc pl-5">
        {result.map((item, i) => {
          return <li key={"a6-" + i}>{item}</li>;
        })}
      </ul>
      <AssignmentsNav />
    </div>
  );
};

export default Assignment6;
