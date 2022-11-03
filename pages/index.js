import fs from 'fs';
import matter from 'gray-matter';

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Card from '../components/Card';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const {data : frontmatter} = matter(readFile);

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className='space-y-4 divide-y'>
      {
        posts.map(({ slug, frontmatter }) => (
            <Card key={slug} slug={slug} matter={frontmatter}/>
        ))
      }
    </div>
    // <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
    //   {posts.map(({ slug, frontmatter }) => (
    //     <div
    //       key={slug}
    //       className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
    //     >
    //       <Link href={`/posts/${slug}`}>
    //         <a>
    //           <Image
    //             width={650}
    //             height={340}
    //             alt={frontmatter.title}
    //             src={`/${frontmatter.socialImage}`}
    //           />
    //           <h1 className='p-4'>{frontmatter.title}</h1>
    //         </a>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
}

