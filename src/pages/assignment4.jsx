import AssignmentsNav from "@/components/AssignmentsNav";
import Button from "@/components/Button";
import { useState } from "react";

const Assignment4 = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 800, available: false },
    { name: "Tablet", price: 400, available: true },
  ];

  const result = products.filter((product) => {
    return product.available == isAvailable;
  });

  const toggleIsAvailable = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">4. Filter Products by Availability</h1>
      <div className="flex gap-4">
        <Button
          text={"Available"}
          handleClick={() => setIsAvailable(true)}
          highlight={isAvailable}
        />
        <Button
          text={"Unavailable"}
          handleClick={() => setIsAvailable(false)}
          highlight={!isAvailable}
        />
      </div>
      <ul className="list-disc pl-5">
        {result.map((product, i) => {
          return (
            <li key={"a4-" + i}>{`${product.name} : $${product.price} : ${
              product.available ? "available" : "unavailable"
            }`}</li>
          );
        })}
      </ul>
      <AssignmentsNav />
    </div>
  );
};

export default Assignment4;
