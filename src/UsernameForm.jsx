import { useState } from 'react';
export default function UsernameForm() {
  const [username, setUsername] = useState('');
  const updateUsername = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <div>
      <label htmlFor='username'>Enter your username </label>
      <input type='text' placeholder='username' value={username} onChange={updateUsername} id='username' />
      <button>Submit</button>
    </div>
  );
}
