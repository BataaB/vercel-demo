import Button from "@/components/Button";
import InputBlock from "@/components/InputBlock";
import { useState } from "react";

const Register = () => {
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

  const handleFirstName = (e) => {
    setData((d) => ({ ...d, firstName: e.target.value }));
  };
  const handleLastName = (e) => {
    setData((d) => ({ ...d, lastName: e.target.value }));
  };
  const handleAddress = (e) => {
    setData((d) => ({ ...d, address: e.target.value }));
  };
  const handleAddress2 = (e) => {
    setData((d) => ({ ...d, address2: e.target.value }));
  };
  const handleCity = (e) => {
    setData((d) => ({ ...d, city: e.target.value }));
  };
  const handleState = (e) => {
    setData((d) => ({ ...d, state: e.target.value }));
  };
  const handleZip = (e) => {
    setData((d) => ({ ...d, zip: e.target.value }));
  };
  const handlePhone = (e) => {
    setData((d) => ({ ...d, phone: e.target.value }));
  };
  const handleEmail = (e) => {
    setData((d) => ({ ...d, email: e.target.value }));
  };
  const handleMembership = (e) => {
    let type;
    switch (e.target.id) {
      case "membership-s":
        type = "Standard";
        break;
      case "membership-p":
        type = "Premium";
        break;
      case "membership-u":
        type = "Ultimate";
        break;
    }
    setData((d) => ({ ...d, membership: type }));
  };

  const submit = () => {
    console.log(data);
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl text-blue-600 text-center mb-10">
        New Member Registration
      </h1>
      <div className="flex flex-col gap-5 w-min mx-auto">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 w-[300px]">
            <label htmlFor="first-name">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              value={data.firstName}
              onChange={handleFirstName}
              className="border-2 py-0 px-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 w-[300px]">
            <label htmlFor="last-name">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              value={data.lastName}
              onChange={handleLastName}
              className="border-2 py-0 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 w-[300px]">
            <label htmlFor="address">
              Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={data.address}
              onChange={handleAddress}
              className="border-2 py-0 px-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 w-[300px]">
            <label htmlFor="address-2">Address 2</label>
            <input
              type="text"
              name="address-2"
              id="address-2"
              value={data.address2}
              onChange={handleAddress2}
              className="border-2 py-0 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 w-[300px]">
            <label htmlFor="city">
              City <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={data.city}
              onChange={handleCity}
              className="border-2 py-0 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="state">
              State/Province <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={data.state}
              onChange={handleState}
              className="border-2 py-0 px-3 rounded-md w-[200px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="zip">
              Zip/Postal Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={data.zip}
              onChange={handleZip}
              className="border-2 py-0 px-3 rounded-md w-[100px]"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 w-[350px]">
            <label htmlFor="phone">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={handlePhone}
              className="border-2 py-0 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 w-[350px]">
            <label htmlFor="email">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleEmail}
              className="border-2 py-0 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 w-[300px]">
            <h2>
              Membership Type <span className="text-red-600">*</span>
            </h2>
            <div className="flex gap-2">
              <div>
                <input
                  type="radio"
                  name="membership"
                  id="membership-s"
                  checked={data.membership == "Standard"}
                  onChange={handleMembership}
                  className="mx-1"
                />
                <label htmlFor="membership-s">Standard</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="membership"
                  id="membership-p"
                  checked={data.membership == "Premium"}
                  onChange={handleMembership}
                  className="mx-1"
                />
                <label htmlFor="membership-p">Premium</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="membership"
                  id="membership-u"
                  checked={data.membership == "Ultimate"}
                  onChange={handleMembership}
                  className="mx-1"
                />
                <label htmlFor="membership-u">Ultimate</label>
              </div>
            </div>
          </div>
        </div>
        <Button text="Submit" handleClick={submit} />
      </div>
    </div>
  );
};

export default Register;
