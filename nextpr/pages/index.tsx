import Link from "next/link";
import React, { FC } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

const PostLink = (props) =>{
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

const index: FC = () => {
  return (
    <Layout>
      <h1>My blog</h1>
      <ul>
        <PostLink title="Hello" />
        <PostLink title="5000" />
        <PostLink title="10000" />  
      </ul>
    </Layout>
  );
};

export default index;
