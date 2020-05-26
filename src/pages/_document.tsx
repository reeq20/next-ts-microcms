import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

type Props = {
  styleTags: any;
};

export default class MyDocument extends Document<Props> {
  static getStaticProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
