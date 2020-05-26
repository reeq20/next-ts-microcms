import { NextComponentType } from "next";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header: NextComponentType = () => {
  return (
    <>
      <HeaderWrap className={`Header`}>
        <h1 className="title">
          <Link href={'/'}>
            <a>RIC Blogs</a>
          </Link>
        </h1>
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

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 8px 32px;
  margin-bottom: 80px;
  box-shadow: 0 2px 4px rgba(50, 50, 50, 0.2);
  box-sizing: border-box;
  background: #fafafa;
  overflow: hidden;
  .title {
    font-size: 16px;
    line-height: 1;
    margin: 0;
  }
  .Navigation {
    display: flex;
    justify-content: center;
    align-content: center;
    &List {
      display: flex;
      > li {
        list-style: none;
        margin-right: 16px;
        a {
          color: #324756;
          text-decoration: none;
          &:visited {
            color: #324756;
          }
        }
      }
    }
  }
`;
export default Header;
