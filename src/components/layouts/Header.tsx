import { NextComponentType } from "next";
import React from "react";
import Link from "next/link";

const Header: NextComponentType = () => {
  return (
    <>
      <nav>
          <ul>
              <li>
                  <Link href={'/'}>HOME</Link>
              </li>
              <li>
                  <Link href={'/blogs'}>BLOGS</Link>
              </li>
          </ul>
      </nav>
    </>
  );
};
export default Header;
