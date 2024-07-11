import { useState } from 'react';
export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: '', quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(false);
  const handleChange = (evt) => {
    setFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ product: '', quantity: 0 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='product'>Product Name</label>
      <input type='text' placeholder='product name' name='product' id='product' onChange={handleChange} value={formData.product} />
      {!productIsValid && <p>Product cannot be empty</p>}
      <label htmlFor='quantity'>Quantity</label>
      <input type='number' placeholder='1' name='quantity' id='quantity' onChange={handleChange} value={formData.quantity} />
      <button>Add Item</button>
    </form>
  );
}
