# Dev Insights - Mini Blog

A small internal blog platform for the fictional startup Dev Insights, where employees can share quick web development tips. Built with React, TypeScript and Vite as a formative assessment.

## Getting Started

This project uses Vite as its build tool and dev server.

### Prerequisites

- Node.js (a current LTS version, 20.19 or newer)
- npm (comes with Node.js)

### Install

```bash
git clone https://github.com/GLOIRE5/Mini-Blog-Project.git
cd Mini-Blog-Project
npm install
```

### Run

```bash
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

### Build and test

The project has no automated test suite. It is checked in two ways:

1. `npm run build` runs the TypeScript compiler in strict mode and then builds the app with Vite. If it finishes without errors, the types are correct.
2. Manual check in the browser (`npm run dev`):
   - The header shows the "Dev Insights" logo and a "New Post" link.
   - Three posts are listed with title, author, preview and date.
   - Posts by GLOIRE have a yellow highlighted background.
   - Posts less than 24 hours old show a red "New!" badge.
   - The browser console shows `[withLogger] Header mounted` messages.

## Project Structure

## Design Choices

### Component types: functional components

All components are functional components. `Header`, `PostList` and `Post` only receive props and return UI. They have no internal state and need no lifecycle methods, so a class component would only add boilerplate (`extends Component`, `render()`, `this.props`). Functional components are also the modern React standard, and they work directly with `React.memo` and hooks such as `useEffect`, which the `withLogger` HOC relies on.

### Styling methods

Two methods are used:

- External CSS files (`src/styles/`) for the reusable base look: global styles, the header, and the post cards. Class names follow a BEM-style pattern (for example `post__title`).
- Inline styles for the dynamic highlight of a post, because that value depends on data computed inside the component.

Conditional styling appears in two places:

- Posts by a specific author get a different background colour and border (inline style).
- Posts published within the last 24 hours show a "New!" badge (conditional rendering with `&&`).

### Optimization strategies

- `React.memo` wraps the `Post` component so it only re-renders when its `post` prop changes. Nothing in the app changes state yet, so the effect is not visible today, but it prevents wasted renders once a parent such as `PostList` re-renders (for example after adding a form or filter).
- Unique `key` props: each post in the list uses `key={post.id}`, giving React a stable identity per item. The `id` is used instead of the array index because an index changes if the list is reordered.

### Higher-order component: `withLogger`

`withLogger` takes a component and returns a new one that logs to the console when the component mounts and unmounts, using `useEffect` and its cleanup function. It is generic (`<P extends object>`), so it works with any component and keeps its prop types. It is applied to `Header`.

In development you will see "mounted", "unmounted", "mounted" in the console. This is expected: React's `<StrictMode>` deliberately mounts, unmounts and remounts components once to catch bugs in effects. It does not happen in a production build.

## Challenges and How I Overcame Them

- Setting up without a template. The assignment said not to use a React template, so I set up Vite, React and TypeScript by hand (`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`) instead of relying on generated boilerplate. This helped me understand what each config file does.
- Understanding the double log from `withLogger`. I first thought the HOC was buggy because it logged mount, unmount, mount. I learned that this is `<StrictMode>` behaviour in development.
- Keeping `node_modules` out of Git. I created the `.gitignore` before the first commit and checked with `git status` that `node_modules` was not listed.
- Working in small commits. I built the project one piece at a time and committed after each step, so the history shows the development process.

## External Libraries and Packages

**Dependencies**

- `react`
- `react-dom`

Dev dependencies

- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `@types/react`
- `@types/react-dom`

No other libraries are used. All styling is plain CSS and inline styles.
