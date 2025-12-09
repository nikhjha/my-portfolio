import { ModeToggle } from "./mode-toggle";

function Navbar() {
  return (
    <div className="p-4 flex items-center">
      <div className="rounded bg-transparent">
        <img
          alt="Nikhil Jha - Portfolio Icon"
          src="/portfolio_transparent.svg"
          className="w-[2rem]"
        />
      </div>
      <div className="ms-auto">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
