const Assignment4 = () => {
  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 800, available: false },
    { name: "Tablet", price: 400, available: true },
  ];

  const result = products.filter((product) => {
    return product.available;
  });

  return (
    <div>
      <div>Filter Products by Availability</div>
      <ul className="list-disc pl-5">
        {result.map((product) => {
          return (
            <li>{`${product.name} : $${product.price} : ${
              product.available ? "available" : "unavailable"
            }`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Assignment4;
