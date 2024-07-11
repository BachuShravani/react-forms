import { useState } from 'react';
export default function SignupForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const updateFirstname = (evt) => {
    setFirstname(evt.target.value);
  };
  const updateLastname = (evt) => {
    setLastname(evt.target.value);
  };
  const handleSubmit = () => {
    console.log(firstname, lastname);
  };
  return (
    <div>
      <label htmlFor='firstname'>First Name</label>
      <input type='text' placeholder='firstname' value={firstname} onChange={updateFirstname} id='firstname' />
      <label htmlFor='lastname'>Last Name</label>
      <input type='text' placeholder='lastname' value={lastname} onChange={updateLastname} id='lastname' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
