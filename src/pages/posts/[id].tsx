import { GetServerSideProps } from 'next'
import { Post } from '../../components/post'
import { Posts } from '../../components/posts'

interface Props {
  post: any
  posts: any[]
}

export default function Home({ post, posts }: Props) {
  return (
    <>
      <Post post={post} />
      <Posts posts={posts} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const [post, posts] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`).then(res => res.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()),
  ])
  return {
    props: {
      post,
      posts
    }
  }
}
