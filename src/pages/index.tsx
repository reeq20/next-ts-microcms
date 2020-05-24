import Head from "next/head";
import axios from "axios";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Blogs } from "../interfaces";
import React from "react";

interface Props {
  blogs: Blogs[];
}

const Home: NextPage<Props> = ({ blogs }) => (
  <>
    <Head>
      <title>blogs</title>
    </Head>

    <h1 className="title">RIC Blogs</h1>
    <div>
      {blogs.map((blog, index) => (
        <div className="item" key={index}>
          <h2 className="item__title">{blog.title}</h2>
          <ul>
            {blog.label.split(",").map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <Link href="/[id]" as={`/${blog.id}`}>
            <a className="item__link">詳細へ</a>
          </Link>
        </div>
      ))}
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY }
  };
  const res = await axios.get(process.env.END_POINT + "blog/?limit=9999", key);

  const data: Array<Blogs> = await res.data.contents;
  return {
    props: {
      blogs: data
    }
  };
};
export default Home;
