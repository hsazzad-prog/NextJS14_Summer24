
import axios from 'axios';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';

interface User {
  id: number;
  email: string;
}


export default async function Page() {
  const response = await axios('https://dummyjson.com/users');
  const users = await response.data.users;
  return (
    <div>
    <h1>Server-Side Rendered Users</h1>
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  </div>
  )
}