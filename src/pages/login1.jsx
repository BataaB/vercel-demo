import { useState } from "react";

const Login1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstName = (fname) => {
    setFirstName(fname);
  };
  const handleLastName = (lname) => {
    setLastName(lname);
  };
  const handleEmail = (mail) => {
    setEmail(mail);
  };

  const submitButton = () => {
    console.log("Name:", firstName, lastName);
    console.log("Email:", email);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => handleFirstName(e.target.value)}
        className="border-2"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => handleLastName(e.target.value)}
        className="border-2"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => handleEmail(e.target.value)}
        className="border-2"
      />
      <button
        onClick={submitButton}
        className="border-2 bg-gray-200 py-0 px-4 block rounded-lg my-2"
      >
        Send
      </button>
    </div>
  );
};

export default Login1;
