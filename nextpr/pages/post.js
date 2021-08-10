import { FC } from 'react';
import Layout from '../components/Layout'

export default (props) => {
  return (
    <Layout>
      <h1>{props.url.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};


