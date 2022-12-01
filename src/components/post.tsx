interface Props {
  post: any
}

export function Post({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body}}></div>
    </div>
  )
}
