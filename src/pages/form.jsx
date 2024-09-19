const Form = () => {
  return (
    <div>
      <input type="text" className="border-2 block my-2" />
      <input type="password" className="border-2 block my-2" />
      <input type="email" className="border-2 block my-2" />
      <input type="number" className="border-2 block my-2" />
      <input type="checkbox" className="border-2 block my-2" />
      <input type="radio" className="border-2 block my-2" />
      <input type="hidden" className="border-2 block my-2" />
      <input type="button" className="border-2 block my-2" value={"Button"} />
      <input type="color" className="border-2 block my-2" />
      <input type="file" className="border-2 block my-2" />
      <input
        type="image"
        src="/logo.png"
        alt=""
        className="border-2 block my-2"
      />
    </div>
  );
};

export default Form;
