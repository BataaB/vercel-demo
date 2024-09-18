import ListItems from "@/components/ListItems";
import LoginStatus from "@/components/LoginStatus";
import MultipleProps from "@/components/MultipleProps";
import UserRole from "@/components/UserRole";

const Conditional = () => {
  let age = 18;
  let loading = true;
  let obj = {
    firstName: "Batkhuleg",
    lastName: "Bazarragchaa",
  };
  //   switch (loading) {
  //     case true:
  //       return <div>Loading</div>;
  //     case false:
  //       return <div>Hi Leap guys</div>;
  //   }
  return (
    <div>
      {/* <div>{age < 18 ? "Nasand hureegui" : "Nasand hursen"}</div>
      <div>{(loading && "Loading") || "Hi Leap guys"}</div> */}
      {/* <div>
        {(obj.firstName == "Batkhuleg" &&
          obj.lastName == "Bazarragchaa" &&
          `Welcome, ${obj.firstName} ${obj.lastName}!`) ||
          "Permission Denied!"}
      </div> */}
      <LoginStatus isLoggedIn={true} />
      <UserRole role="user" />
      <MultipleProps isLoggedIn={true} isVIP={false} />
      <ListItems list={["Item 1", "Item 2"]} />
    </div>
  );
};

export default Conditional;
