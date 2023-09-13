"use client";

export default function Navbar() {
  return (
    <header className="bg-black
    ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <img src={"../logo.png"} width="130" height="80"/>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md font-semibold text-black">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/">Events</a>
                </li>

                <li>
                  <a href="/">News</a>
                </li>

                <li>
                  <a href="/">Information</a>
                </li>

                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-1">
              <a
                className="rounded-md bg-transparent px-5 py-2.5 text-sm font-medium text-black hover:text-white hover:bg-[#0C8CE9] duration-300"
                href="/"
              >
                Sign In
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md px-5 py-2.5 text-sm font-medium text-white hover:text-black bg-[#0C8CE9] hover:bg-white duration-300"
                  href="/"
                >
                  Sign Up
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
