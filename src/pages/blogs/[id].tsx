import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { Blogs } from "../../interfaces";

interface Props {
  blog: Blogs;
  errors?: string;
}

const BlogDetail: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>{props.blog.title}</title>
      </Head>
      <h1 className="title">{props.blog.title}</h1>
      <p>{props.blog.createdAt}</p>
      <div className="item">
        <p className="item__label">{props.blog.label}</p>
        <p className="item__description">{props.blog.description}</p>
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
