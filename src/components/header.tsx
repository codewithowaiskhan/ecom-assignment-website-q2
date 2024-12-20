import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="w-full h-[80px] flex justify-center items-center border-b-2">
      <div className="h-full items-center w-[80%] flex justify-between ">
        {/* left */}
        <div>
          {/* logo */}
          <h1 className="text-3xl font-bold">Exclusive</h1>
        </div>
        {/* right */}
        <div>
          <ul className="flex gap-x-5 mr-4">
            <li>
              <Link className="hover:underline" href={"/"}>
                Home
              </Link>
            </li>

            <li>
              <Link className="hover:underline" href={"/"}>
                Contact
              </Link>
            </li>

            <li>
              <Link className="hover:underline" href={"/"}>
                About
              </Link>
            </li>

            <li>
              <Link className="hover:underline" href={"/"}>
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
