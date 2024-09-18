const LoginStatus = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? "Logged In" : "Please Log In"}</div>;
};

export default LoginStatus;
