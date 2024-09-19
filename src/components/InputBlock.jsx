const InputBlock = ({ label, isRequired, type, name, options }) => {
  if (type == "radio") {
    return (
      <div className="flex flex-col">
        <h1 className="font-bold">
          {label} {isRequired && <span className="text-red-700">*</span>}
        </h1>
        <div className="flex gap-2">
          {options.map((option, i) => {
            return (
              <div key={option + "-" + i}>
                <input
                  type="radio"
                  name={name}
                  id={name + "-" + option}
                  className="mx-1"
                />
                <label htmlFor={name + "-" + option}>{option}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className="font-bold">
        {label} {isRequired && <span className="text-red-700">*</span>}
      </label>
      {["text", "tel", "email"].includes(type) && (
        <input
          type={type}
          name={name}
          id={name}
          className="border-2 border-gray-400 rounded-md px-3 max-w-[200px]"
        />
      )}
      {type == "select" && (
        <div>
          <select
            name="state"
            id="state"
            defaultValue={""}
            className="border-2 border-gray-400 rounded-md px-3 max-w-[200px]"
          >
            <option disabled value=""></option>
            {options.map((option, i) => {
              return (
                <option key={"option-" + i} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default InputBlock;
