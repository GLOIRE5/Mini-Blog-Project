import Post from './Post'
import type { BlogPost } from '../types/post'

const HOUR = 60 * 60 * 1000

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Why TypeScript Makes React Easier',
    author: 'GLOIRE',
    content:
      'Typing your props catches bugs before you even open the browser, and your editor can autocomplete everything.',
    date: '2026-09-18T09:30:00',
  },
  {
    id: 2,
    title: 'Keep Your Components Small',
    author: 'Amina',
    content:
      'A component that does one thing is easier to read, test and reuse across the whole application.',
    date: '2026-09-15T14:00:00',
  },
  {
    id: 3,
    title: 'Vite Makes Dev Servers Fast',
    author: 'Eric',
    content:
      'Vite serves your source files as native ES modules, so the dev server starts almost instantly.',
    // Always "2 hours ago", so the "New!" badge we add later can be tested
    date: new Date(Date.now() - 2 * HOUR).toISOString(),
  },
]

function PostList() {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}

export default PostList
