import React from "react";
import Head from "next/head";

export default function Title({ text }) {
  return (
    <Head>
      <title>{text}</title>
      <link rel="icon" href="/order-online.ico" />
    </Head>
  );
}
