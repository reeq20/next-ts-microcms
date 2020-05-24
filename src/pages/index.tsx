import React, { FC } from "react";
import Head from "next/head";
import Header from "../components/layouts/Header";

const Home: FC = () => (
  <div>
    <Head>
      <title>BLOGS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div>TOP</div>
  </div>
);

export default Home;
