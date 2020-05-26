import { NextComponentType } from "next";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Footer: NextComponentType = () => {
  return (
    <>
      <FooterWrap>
        <div className="Footer__inner">
          <p className="title">
            <Link href={"/"}>
              <a>RIC Blogs</a>
            </Link>
          </p>
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
          <p className="copyright">
            Copyright © 2020
            <span
              itemProp="publisher"
              itemType="https://schema.org/Organization"
            >
              RikuSugawara.
            </span>
            All Rights Reserved.
          </p>
        </div>
      </FooterWrap>
    </>
  );
};

const FooterWrap = styled.footer`
  padding: 16px;
  background: #29363d;
  color: #fff;
  .Footer__inner {
    display: flex;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    a {
      color: #fff;
      text-decoration: none;
      &:visited {
        color: #fff;
      }
    }
    .Navigation {
      margin-left: 40px;

      &List {
        list-style: none;
        display: flex;
        padding: 0;
        > li {
          margin-right: 16px;
        }
      }
    }
    .copyright {
      display: block;
      margin-left: auto;
    }
  }
`;
export default Footer;
