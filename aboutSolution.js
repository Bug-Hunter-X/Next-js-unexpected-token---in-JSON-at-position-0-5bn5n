```javascript
// pages/about.js
import { getServerSideProps } from 'next';

export default function About({ user }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>User ID: {user.id}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch user data from API or environment variables
  const user = JSON.parse(process.env.NEXT_PUBLIC_USER || '{}');
  return {
    props: {
      user,
    },
  };
}
```