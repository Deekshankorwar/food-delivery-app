import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
    setTotal(total + item.price);
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((i) => i !== item));
    setTotal(total - item.price);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <button onClick={() => addItem({ name: 'Item 1', price: 10 })}>Add Item 1</button>
      <button onClick={() => addItem({ name: 'Item 2', price: 20 })}>Add Item 2</button>
    </div>
  );
}

export default Cart;


