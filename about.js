```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if you don't have getStaticProps or getServerSideProps
  const user = JSON.parse(process.env.NEXT_PUBLIC_USER || '{}');

  return (
    <div>
      <h1>About Page</h1>
      <p>User ID: {user.id}</p> 
    </div>
  );
}
```