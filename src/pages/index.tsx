import axios from "axios";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Blogs } from "../interfaces";
import React from "react";
import styled from "styled-components";
import Labels from "../components/ui/Labels";
import Head from "next/head";

interface Props {
  blogs: Blogs[];
}

const Home: NextPage<Props> = ({ blogs }) => (
  <>
    <Head>
      <title>HOME | {process.env.BASE_TITLE}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
    <IndexList className="CardList">
      {blogs.map((blog, index) => (
        <li className="item" key={index}>
          <Link href={`/${blog.id}`} as={`/${blog.id}`}>
            <a className="item__link">
              <img src={blog.image.url ? blog.image.url : ''} alt="" className="item__image" />
              <span className="item__content">
                <h2 className="item__title">{blog.title}</h2>
                <Labels label={blog.label} />
              </span>
            </a>
          </Link>
        </li>
      ))}
    </IndexList>
  </>
);

const IndexList = styled.ul`
  &.CardList {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    list-style: none;
  }
  .item {
    background: #fff;
    margin-bottom: 40px;
    &__link {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      text-decoration: none;
      color: #234556;
      &:visited {
        color: #234556;
      }
    }
    &__image {
      width: 30%;
      height: auto;
    }
    &__content {
      padding: 12px 24px;
    }
    &__title {
      margin-bottom: 40px;
    }
  }
`;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY }
  };
  const res = await axios.get(process.env.NEXT_PUBLIC_END_POINT + "blog/", key);

  const data: Array<Blogs> = await res.data.contents;
  return {
    props: {
      blogs: data
    }
  };
};
export default Home;
