import { forwardRef, HTMLAttributes, useState } from "react";
import logoImage from "@/assets/images/logo.png";

const Navbar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const [navbarCollapsed, setNavbarCollapsed] = useState(false);

    return (
      <nav
        ref={ref}
        className={`shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] sticky top-0 bg-white ${className} z-50`}
        {...props}
      >
        <div className="container relative flex items-center justify-between gap-3 py-2 md:py-4 text-primary">
          {/* Logo */}
          <img src={logoImage} alt="logo" className="h-10" />

          {/* Hamburger */}
          <button
            className="hamburger flex md:hidden flex-col gap-1.5 w-6"
            onClick={() => setNavbarCollapsed((prev) => !prev)}
          >
            <span
              className={`${
                navbarCollapsed && "rotate-[225deg] translate-y-2"
              }`}
            ></span>
            <span className={`${navbarCollapsed && "opacity-0"}`}></span>
            <span
              className={`${
                navbarCollapsed && "rotate-[135deg] -translate-y-2"
              }`}
            ></span>
          </button>

          {/* Links */}
          <ul
            className={`max-md:absolute max-md:bg-white max-md:w-full max-md:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] top-full left-0 md:flex items-center gap-5 text-gray-500 overflow-hidden transition-[max-height] ease-out duration-300 ${
              navbarCollapsed ? "max-md:max-h-60" : "max-md:max-h-0"
            }`}
          >
            <li className="nav-link">Home</li>
            <li className="nav-link">Portfolio</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Contact me</li>
            <button className="bg-secondary hover:bg-secondary-dark text-primary rounded p-1 px-3 max-md:w-[calc(100%-16px)] max-md:m-2 max-md:my-4">
              Download CV
            </button>
          </ul>
        </div>
      </nav>
    );
  }
);

export default Navbar;
