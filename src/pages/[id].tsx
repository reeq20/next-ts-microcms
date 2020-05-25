import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { Blogs } from "../interfaces";
import React from "react";
import styled from "styled-components";
import Labels from "../components/ui/Labels";
import { useRouter } from "next/router";

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
    padding: 56px 72px;
    margin: 0 auto;
    background: #fafafa;
    box-shadow: 0 6px 12px 1px rgba(50, 50, 120, 0.1);

    img {
      width: 100%;
      height: auto;
    }

    .item {
      &__description {
        margin: 48px 0 40px;
        color: #454865;
        font-size: 16px;
        line-height: 2;
      }
    }
  }
`;

const BlogDetail: NextPage<Props> = ({ blog }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{blog.title} | BLOGS</title>
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta name="keywords" content={blog.label} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={blog.image.url} />
        <meta property="og:image" content={blog.image.url} />
        <meta property="og:site_name" content={blog.title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@fabrec_jp" />
        <meta name="twitter:url" content={blog.image.url} />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.image.url} />
        <link rel="canonical" href={router.asPath} />
      </Head>
      <Article className="content">
        <h1 className="title">{blog.title}</h1>
        <img src={blog.image.url} alt="" />
        <div className="item">
          <Labels label={blog.label} />
          <p className="item__description">{blog.description}</p>
          <div dangerouslySetInnerHTML={createMarkup(blog.contents)} />
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
