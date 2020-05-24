import React, { FC } from "react";
import Head from "next/head";
import Header from "../components/layouts/Header";

const Home: FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Header/>
    <div>Home</div>
  </div>
);

export default Home;
