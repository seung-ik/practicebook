import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = (props) => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const index = () => {
  return (
    <Layout>
      <h1>My blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
};

export default index;
