import Head from 'next/head';
import Image from 'next/image';

import client from '../lib/sanity';

export async function getStaticProps(context: any) {
  const post = await client.fetch(
    `
    *[_type == "aboutUs"][0]
  `
  );
  return {
    props: {
      post,
    },
  };
}

export default function Home({ post }: any) {
  console.log('Printing props', post);
  return (
    <div className="main">
      <h1>{post.name}</h1>
    </div>
  );
}
