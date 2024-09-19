import Button from "@/components/Button";
import AssignmentsNav from "@/components/AssignmentsNav";

const { useState } = require("react");

const Assignment0 = () => {
  const [age, setAge] = useState(18);
  const array = [
    {
      name: "Dul",
      age: 18,
    },
    {
      name: "Alungoo",
      age: 17,
    },
    {
      name: "Sumiyaa",
      age: 19,
    },
  ];

  const filteredArray = array.filter((element) => {
    return element.age >= age;
  });

  const handleClick18 = () => {
    setAge(18);
  };
  const handleClickAll = () => {
    setAge(0);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">
        {age == 18 ? "Nasand Hursen" : "Buh Nasnii"} Humuus
      </h1>
      <div className="flex gap-4">
        <Button text={"18 aas deesh nasniih"} handleClick={handleClick18} />
        <Button text={"Buh nasniih"} handleClick={handleClickAll} />
      </div>
      <div>
        {filteredArray.map((person) => {
          return (
            <div>
              <p>
                <strong>Name: </strong>
                {person.name}
              </p>
              <span>
                <strong>Age: </strong>
                {person.age}
              </span>
            </div>
          );
        })}
      </div>
      <AssignmentsNav />
    </div>
  );
};

export default Assignment0;
