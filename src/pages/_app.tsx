/* pages/_app.tsx */
import React from "react";
import App from "next/app";
import Header from "../components/layouts/Header";
import { createGlobalStyle } from "styled-components";
import Footer from "../components/layouts/Footer";

const GlobalStyle = createGlobalStyle`
html{
height:100%;
}
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    //background: #f2f2f8;
    background: #fafafd;
    font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
    *{
    box-sizing: border-box;
    }
  }
  .Layout{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  }
`;

/*
  カスタム共通処理
  ※ サーバーサイド側とクライアント側、両方で実行される
  ※ https://nextjs.org/docs/#custom-app
*/
export default class MyApp extends App {
  static async getStaticProps(ctx: any) {
    let pageProps = {};

    if (ctx.Component.getStaticProps) {
      pageProps = await ctx.Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <div className="Layout">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </>
    );
  }
}
