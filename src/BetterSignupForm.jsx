import { useState } from 'react';
export default function BetterSignupForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', password: '' });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      // currData[changedField] = newValue;
      return { ...currData, [changedField]: newValue };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor='firstname'>First Name</label>
      <input type='text' placeholder='first name' value={formData.firstName} onChange={handleChange} id='firstname' name='firstName' />
      <label htmlFor='lastname'>Last Name</label>
      <input type='text' placeholder='last name' value={formData.lastName} onChange={handleChange} id='lastname' name='lastName' />
      <label htmlFor='password'>Password</label>
      <input type='password' placeholder='password' value={formData.password} onChange={handleChange} id='password' name='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
