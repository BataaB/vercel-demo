const ListItems = ({ list }) => {
  const len = list.length;
  return (
    <div>
      {list.length == 0
        ? "No items"
        : list.map((item, i) => {
            return <li key={"item-" + i}>{item}</li>;
          })}
    </div>
  );
};

export default ListItems;
