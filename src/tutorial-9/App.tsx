import React from "react";

interface IPost {
  createdAt: string;
  name: string;
  id: string;
}

function App() {
  const [users, setUsers] = React.useState<IPost[]>([]);

  async function getUsers() {
    try {
      const res = await fetch("https://61efebb9732d93001778e6b4.mockapi.io/posts");
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const result = await res.json();
      setUsers((prev) => [...prev, ...result]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Get users</button>
    </div>
  );
}

export default App;
