import Link from "next/link";

const Header = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between container mx-auto">
        <Link className="text-xl font-bold px-6 text-white mr-4" href="/">
          My Website
        </Link>
        <ul className="flex justify-end">
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white font-bold py-3 px-8 rounded-full mr-4 mb-4"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white font-bold py-3 px-8 rounded-full mr-4 mb-4"
              href="/#products"
            >
              Products
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white font-bold py-3 px-8 rounded-full mr-4 mb-4"
              href="/#services"
            >
              Services
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white font-bold py-3 px-8 rounded-full mr-4 mb-4"
              href="/#about-us"
            >
              About Us
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white font-bold py-3 px-8 rounded-full mr-4 mb-4"
              href="/#contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
