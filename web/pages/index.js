import groq from 'groq';
import client from '../client';

import Blogs from '../components/blogs';
import Cta from '../components/cta';

const Index = ({ posts }) => {
  return (
    <div>
      <Blogs posts={posts} />
      <Cta />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
