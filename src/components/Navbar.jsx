import clsx from "clsx";

import { ChevronDown } from "lucide-react";

const Navbar = () => {
  // Added 'group' to listen for hover states on the links
  const linkClass = clsx(
    "group flex items-center gap-1.5 cursor-pointer text-sm font-medium transition-colors duration-200",
    "hover:text-gray-300",
  );

  return (
    <nav
      className={clsx(
        "fixed top-0 right-0 left-0 mx-auto mt-3 h-10 md:h-9 z-50 flex justify-center rounded-2xl bg-gray-600",
        "w-[90%] md:w-[50%]",
      )}
    >
      <div className="flex w-full items-center justify-between px-4 md:px-6 text-white">
        <p className={linkClass}>Blog</p>

        <p className={linkClass}>
          Products
          <ChevronDown
            size={14}
            className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
          />
        </p>

        <p className={clsx(linkClass, "text-blue-300")}>CutLab</p>

        <p className={linkClass}>
          AI tools
          <ChevronDown
            size={14}
            className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
          />
        </p>

        <p className={linkClass}>Pricing</p>
      </div>
    </nav>
  );
};

export default Navbar;
