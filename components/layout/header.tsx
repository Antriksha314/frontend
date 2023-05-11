import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4">
      <nav className="flex items-center justify-between container mx-auto">
        <div className="flex items-center">
          <Link className="text-xl font-bold text-gray-800 mr-4" href="/">
            My Website
          </Link>
          <ul className="flex">
            <li className="mr-4">
              <Link className="text-gray-800 hover:text-gray-600" href="/">
                Home
              </Link>
            </li>
            <li className="mr-4">
              <Link className="text-gray-800 hover:text-gray-600" href="/#services">
                Services
              </Link>
            </li>
            <li className="mr-4">
              <Link className="text-gray-800 hover:text-gray-600" href="/#about-us">
                About Us
              </Link>
            </li>
            <li className="mr-4">
              <Link className="text-gray-800 hover:text-gray-600" href="/#contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
