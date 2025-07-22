const Navbar = () => {
  return (
    <nav>
      <div className="container flex items-center justify-between gap-5 py-2 text-primary">
        <span className="font-medium text-3xl">Babajide</span>
        <ul className="flex items-center gap-5 text-gray-500">
          <li className="nav-link">Home</li>
          <li className="nav-link">Portfolio</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact me</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
