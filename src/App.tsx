import Post from './components/Post'
import type { BlogPost } from './types/post'

const samplePost: BlogPost = {
  id: 1,
  title: 'Why TypeScript Makes React Easier',
  author: 'GLOIRE',
  content: 'Typing your props catches bugs before you even open the browser.',
  date: '2026-09-18T09:30:00',
}

function App() {
  return (
    <div>
      <h1>Dev Insights</h1>
      <Post post={samplePost} />
    </div>
  )
}

export default App
