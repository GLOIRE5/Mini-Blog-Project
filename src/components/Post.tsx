import type { BlogPost } from '../types/post'
import { getPreview } from '../utils/getPreview'

interface PostProps {
  post: BlogPost
}

function Post({ post }: PostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="post">
      <h2 className="post__title">{post.title}</h2>
      <p className="post__author">By {post.author}</p>
      <p className="post__preview">{getPreview(post.content)}</p>
      <time className="post__date" dateTime={post.date}>
        {formattedDate}
      </time>
    </article>
  )
}

export default Post
