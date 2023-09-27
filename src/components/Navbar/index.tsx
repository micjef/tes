const Navbar = () => {
  const router = window.location.pathname;

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="block py-2 pl-3 pr-4 rounded text-blue-700 md:dark:text-blue-500"
          aria-current="page"
        >
          Logo
        </a>
        <a
          href={router === "/signin" ? "/signup" : "/signin"}
          className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:dark:text-blue-500"
          aria-current="page"
        >
          {router === "/signin" ? "Register" : "Login"}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
