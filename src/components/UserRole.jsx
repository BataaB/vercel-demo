const UserRole = ({ role }) => {
  switch (role) {
    case "admin":
      return <div>Admin Dashboard</div>;
    case "user":
      return <div>User Dashboard</div>;
    default:
      return <div>Access Denied</div>;
  }
  //   return (
  //     <div>
  //       {role == "admin"
  //         ? "Admin Dashboard"
  //         : admin == "user"
  //         ? "User Dashboard"
  //         : "Access Denied"}
  //     </div>
  //   );
};

export default UserRole;
