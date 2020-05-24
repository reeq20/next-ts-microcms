/* pages/_app.tsx */
import React from "react";
import App, { Container } from "next/app";
import Header from "../components/layouts/Header";

/*
  カスタム共通処理
  ※ サーバーサイド側とクライアント側、両方で実行される
  ※ https://nextjs.org/docs/#custom-app
*/
export default class MyApp extends App {
  static async getInitialProps(ctx: any) {
    let pageProps = {};

    if (ctx.Component.getInitialProps) {
      pageProps = await ctx.Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}
