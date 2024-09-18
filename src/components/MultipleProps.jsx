const MultipleProps = ({ isLoggedIn, isVIP }) => {
  if (isLoggedIn && isVIP) {
    return <div>VIP access</div>;
  } else if (isLoggedIn) {
    return <div>Regular access</div>;
  } else if (isVIP) {
    return <div>Log in for VIP access</div>;
  } else {
    return <div>Access Denied</div>;
  }
};

export default MultipleProps;
