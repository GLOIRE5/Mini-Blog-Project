import { memo } from 'react'
import type { BlogPost } from '../types/post'
import { getPreview } from '../utils/getPreview'
import { isNewPost } from '../utils/isNewPost'
import '../styles/Post.css'

const HIGHLIGHTED_AUTHOR = 'GLOIRE'

interface PostProps {
  post: BlogPost
}

function Post({ post }: PostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const isHighlighted = post.author === HIGHLIGHTED_AUTHOR
  const isNew = isNewPost(post.date)

  // Inline styles: conditional highlight for a specific author
  const postStyle = {
    backgroundColor: isHighlighted ? '#fff7d6' : '#ffffff',
    borderLeft: isHighlighted ? '4px solid #f59e0b' : '4px solid transparent',
  }

  return (
    <article className="post" style={postStyle}>
      <h2 className="post__title">
        {post.title}
        {isNew && <span className="post__badge">New!</span>}
      </h2>
      <p className="post__author">By {post.author}</p>
      <p className="post__preview">{getPreview(post.content)}</p>
      <time className="post__date" dateTime={post.date}>
        {formattedDate}
      </time>
    </article>
  )
}

// memo: skip re-rendering a Post when its `post` prop hasn't changed
export default memo(Post)
