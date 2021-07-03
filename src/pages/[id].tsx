import {NextPage, GetStaticPaths, GetStaticProps} from "next";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import {Blogs} from "../interfaces";
import React from "react";
import Labels from "../components/ui/Labels";
import {useRouter} from "next/router";
import Article from "../components/style/Article";

interface Props {
    blog: Blogs;
    errors?: string;
}

function createMarkup(htmlContents) {
    if (!htmlContents) {
        return;
    }
    return {__html: htmlContents};
}

function convertDate(date, replaceValue: string = "-") {
    return new Date(date).toLocaleDateString("ja").replace(/\//g, replaceValue);
}

const BlogDetail: NextPage<Props> = ({blog}) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>
                    {blog.title} || 'base title'
                </title>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
    {
      "@context": "http://schema.org",
      "@type": "Article",
      "headline": "${escape(blog.title.slice(0, 55))}",
      "image": "${escape(blog.image.url)}",
      "author": {
        "@type": "Person",
        "name": "${escape("RikuSugawara")}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "${escape("RikuSugawara")}",
        "logo": {
          "@type": "ImageObject",
          "url": "${escape("/")}"
        }
      },
      "datePublished": "${blog.createdAt}",
      "dateModified": "${blog.updatedAt}",
      "mainEntityOfPage": "${escape(process.env.NEXT_PUBLIC_BASE_PATH + router.asPath)}"
    }`
                    }}
                />
                <meta property="og:title" content={blog.title}/>
                <meta property="og:description" content={blog.description}/>
                <meta name="description" content={blog.description}/>
                <meta name="keywords" content={blog.label}/>
                <meta property="og:type" content="article"/>
                <meta
                    property="og:url"
                    content={process.env.BASE_PATH + router.asPath}
                />
                <meta property="og:image" content={blog.image.url}/>
                <meta property="og:site_name" content={blog.title}/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@fabrec_jp"/>
                <meta
                    name="twitter:url"
                    content={process.env.BASE_PATH + router.asPath}
                />
                <meta name="twitter:title" content={blog.title}/>
                <meta name="twitter:description" content={blog.description}/>
                <meta name="twitter:image" content={blog.image.url}/>
                <link rel="canonical" href={process.env.BASE_PATH + router.asPath}/>
            </Head>
            <Article className="content">
                <div className={`postDate`}>
          <span className={`created`}>
            作成日時
            <time dateTime={convertDate(blog.createdAt)}>
              {convertDate(blog.createdAt, ".")}
            </time>
          </span>
                    <span className={`updated`}>
            更新日時
            <time dateTime={convertDate(blog.updatedAt)}>
              {convertDate(blog.updatedAt, ".")}
            </time>
          </span>
                </div>
                <h1 className="title">{blog.title}</h1>
                <img src={blog.image.url} alt=""/>
                <div className="item">
                    <Labels label={blog.label}/>
                    <p className="item__description">{blog.description}</p>
                    <div dangerouslySetInnerHTML={createMarkup(blog.contents)}/>
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
        headers: {"X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY}
    };
    const res = await axios.get(process.env.NEXT_PUBLIC_END_POINT + "blog/", key);
    const data: Blogs[] = await res.data.contents;
    const paths = data.map(item => ({
        params: {id: item.id.toString()}
    }));

    return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const key = {
        headers: {"X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY}
    };

    // const res = await axios.get(process.env.NEXT_PUBLIC_END_POINT + "blog/", key);
    const res = await axios.get(
        process.env.NEXT_PUBLIC_END_POINT + "blog/" + params?.id,
        key
    );

    // console.log('res')
    // const data: Blogs = {
    //     id: '',
    //     createdAt: '',
    //     updatedAt: '',
    //     title: '',
    //     label: '',
    //     image: { url: '' },
    //     description: '',
    //     contents: '',
    //     date: new Date(),
    //     related: [],
    // };
    const data: Blogs = await res.data;

    return {
        props: {blog: data}
    };
};

export default BlogDetail;
