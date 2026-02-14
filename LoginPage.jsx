import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const user = { email, password };
    localStorage.setItem('auth', JSON.stringify(user));
    if (onLogin) onLogin(user);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input className="px-3 py-2 rounded border bg-white text-black placeholder-gray-500" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" className="px-3 py-2 rounded border bg-white text-black placeholder-gray-500" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
}
