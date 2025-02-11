import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header p-5 bg-white shadow-header w-[100%] h-max">
        <div className="flex items-center gap-3 justify-end">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex text-heading text-[16px] font-medium"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              Hi, John
            </button>
            <div
              className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden transition-all duration-200 ${
                isOpen ? "block" : "hidden"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-heading" role="menuitem" id="menu-item-0">
                  Profile
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-heading"
                    role="menuitem"
                    id="menu-item-3"
                  >
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </div>
          <span className="flex items-center w-[30px] h-[30px] bg-primary-500 rounded text-white font-medium justify-center">
            J
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
