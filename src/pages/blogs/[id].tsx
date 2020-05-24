import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { Blogs } from "../../interfaces";
import React from "react";

interface Props {
  blog: Blogs;
  errors?: string;
}

function createMarkup(htmlContents) {
  if(!htmlContents){
      return
  }
    return { __html: htmlContents };
}

const BlogDetail: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>{props.blog.title} | BLOGS</title>
      </Head>
      <h1 className="title">{props.blog.title}</h1>
      <img src="" alt="" />
      <div className="item">
        <ul>
            {props.blog.label.split(',').map((item,index)=>{
                return (<li key={index}>{item}</li>)
            })}
        </ul>
        <p className="item__description">{props.blog.description}</p>
        <article dangerouslySetInnerHTML={createMarkup(props.blog.contents)} />
      </div>
      <Link href="/blogs">
        <a className="link">ブログトップへ</a>
      </Link>
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
