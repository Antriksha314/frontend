import Head from "next/head";
import Link from "next/link";
import Header from "./header";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
      </Head>

      <main className="flex-1 py-4 relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-black opacity-50">
          <Header />
        </div>
        <div className="container mx-auto py-8">{children}</div>
      </main>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <span>© Your Company Name</span>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:text-gray-300" href="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/terms">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
