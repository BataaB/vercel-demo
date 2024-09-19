import Button from "@/components/Button";
import InputBlock from "@/components/InputBlock";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    membership: "",
  });

  const submit = () => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1></h1>
    </div>
  );
};

export default Login;
