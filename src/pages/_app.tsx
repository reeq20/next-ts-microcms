/* pages/_app.tsx */
import React from "react";
import App, { Container } from "next/app";
import Header from "../components/layouts/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f2f2f8;
    margin: 0;
    padding: 0;
    *{
    box-sizing: border-box;
    }
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
      <Container>
        <GlobalStyle />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}
