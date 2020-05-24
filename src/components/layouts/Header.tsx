import { NextComponentType } from "next";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderWrap = styled.header`
  overflow: hidden;
  .Navigation {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 64px;
    padding: 8px 32px;
    box-shadow: 0px 2px 4px rgba(50, 50, 50, 0.2);
    box-sizing: border-box;
    &List {
      display: flex;
      > li {
        list-style: none;
        margin-right: 16px;
        a{
        color: #4dd0e1;
        &:visited{
        color: #4dd0e1;
        }
        }
      }
    }
  }
`;

const Header: NextComponentType = () => {
  return (
    <>
      <HeaderWrap>
        <nav className={`Navigation`}>
          <ul className={`NavigationList`}>
            <li>
              <Link href={"/"}>
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href={"/about/"}>
                <a>ABOUT</a>
              </Link>
            </li>
          </ul>
        </nav>
      </HeaderWrap>
    </>
  );
};
export default Header;
