import ActionButton from "./actionButton";
import Logo from "./logo";
import NavigationBar from "./navigationBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b h-40">
      <Logo />
      <NavigationBar />
      <ActionButton />
    </div>
  );
};

export default Navbar;
