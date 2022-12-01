import { GetServerSideProps } from 'next'
import Link from 'next/link'

interface Props {
  posts: any[]
}

export default function Home({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const [posts] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()),
  ])
  return {
    props: {
      posts
    }
  }
}
