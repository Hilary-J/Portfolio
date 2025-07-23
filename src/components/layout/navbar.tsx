import { forwardRef, HTMLAttributes } from "react";
import logoImage from "@/assets/images/logo.png"

const Navbar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => {
    return (
      <nav
        ref={ref}
        className={`shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] sticky top-0 bg-white ${className} z-50`}
        {...props}
      >
        <div className="container flex items-center justify-between gap-3 py-4 text-primary">
          <img src={logoImage} alt="logo" className="h-10" />
          {/* <span className="font-medium text-3xl">Babajide</span> */}
          <ul className="flex items-center gap-5 text-gray-500">
            <li className="nav-link">Home</li>
            <li className="nav-link">Portfolio</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Contact me</li>
            <button className="bg-secondary hover:bg-orange-500 text-primary rounded p-1 px-3">
              Download CV
            </button>
          </ul>
        </div>
      </nav>
    );
  }
);

export default Navbar;
