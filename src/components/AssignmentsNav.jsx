const { default: Link } = require("next/link");

const AssignmentsNav = () => {
  return (
    <nav className="flex gap-3 mt-10">
      <Link href={"/assignment0"}>Assignment 0</Link>
      <Link href={"/assignment1"}>Assignment 1</Link>
      <Link href={"/assignment2"}>Assignment 2</Link>
      <Link href={"/assignment3"}>Assignment 3</Link>
      <Link href={"/assignment4"}>Assignment 4</Link>
      <Link href={"/assignment5"}>Assignment 5</Link>
      <Link href={"/assignment6"}>Assignment 6</Link>
    </nav>
  );
};

export default AssignmentsNav;
