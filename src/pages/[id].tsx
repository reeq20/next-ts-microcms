import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { Blogs } from "../interfaces";
import React from "react";
import styled from "styled-components";
import Labels from "../components/ui/Labels";

interface Props {
  blog: Blogs;
  errors?: string;
}

function createMarkup(htmlContents) {
  if (!htmlContents) {
    return;
  }
  return { __html: htmlContents };
}

const Article = styled.article`
  &.content {
    box-sizing: border-box;
    max-width: 800px;
    width: 100%;
    padding: 16px;
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const BlogDetail: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title} | BLOGS</title>
      </Head>
      <Article className="content">
        <h1 className="title">{blog.title}</h1>
        <img src={blog.image.url} alt="" />
        <div className="item">
          <Labels
            label={blog.label}
          />
          <p className="item__description">{blog.description}</p>
          <div
            dangerouslySetInnerHTML={createMarkup(blog.contents)}
          />
        </div>
        <Link href="/">
          <a className="link">トップへ</a>
        </Link>
      </Article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY }
  };
  const res = await axios.get(process.env.END_POINT + "blog/?limit=9999", key);
  const data: Blogs[] = await res.data.contents;
  const paths = data.map(item => ({
    params: { id: item.id.toString() }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY }
  };
  const res = await axios.get(
    process.env.END_POINT + "blog/" + params?.id,
    key
  );
  const data: Blogs = await res.data;
  return {
    props: { blog: data }
  };
};

export default BlogDetail;
