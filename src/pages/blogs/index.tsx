import Head from "next/head";
import axios from "axios";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Blogs } from "../../interfaces";

interface Props {
  blogs: Blogs[];
}

const BlogHome: NextPage<Props> = ({ blogs }) => (
  <>
    <Head>
      <title>blogs</title>
    </Head>

    <h1 className="title">Blogs</h1>
    <Link href="/">
      <a className="link">ホームへ</a>
    </Link>
    <div>
      {blogs.map((blog, index) => (
        <div className="item" key={index}>
          <h2 className="item__title">{blog.title}</h2>
          <ul className="item__label">
            {blog.label.split(",").map((item, index) => (
              <li key="{index}">{item}</li>
            ))}
          </ul>
          <Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
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

  console.log(res);

  const data: Array<Blogs> = await res.data.contents;
  return {
    props: {
      blogs: data
    }
  };
};
export default BlogHome;
