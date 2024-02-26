import ActionButton from "./actionButton";
import Logo from "./logo";
import NavigationBar from "./navigationBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b">
      <Logo />
      <NavigationBar />
      <ActionButton />
    </div>
  );
};

export default Navbar;
