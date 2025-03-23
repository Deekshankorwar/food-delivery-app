
import React, { useState } from 'react';

function Menu() {
  const [menuItem, setMenuItem] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [itemList, setItemList] = useState([
    { name: 'Pizza', price: 10.99, description: 'A delicious pizza' },
    { name: 'Burger', price: 8.99, description: 'A juicy burger' },
    { name: 'Salad', price: 6.99, description: 'A fresh salad' },
    { name: 'french fries', price: 10.99, description: 'crispy frenchfries' },
    { name: 'Sandwich', price: 4.99, description: 'A delicious sandwich' },
    { name: 'Cocktails', price: 12.99, description: 'A juicy cocktail' },
    // Add more items to the list
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!menuItem || !price || !description) {
      setError('Please fill in all fields.');
    } else {
      const newMenuItem = {
        name: menuItem,
        price: price,
        description: description,
      };
      setMenuItems([...menuItems, newMenuItem]);
      setMenuItem('');
      setPrice('');
      setDescription('');
      setError(null);
    }
  };

  const handleAddItem = (item) => {
    setMenuItems([...menuItems, item]);
  };

  return (
    <div>
      <h2>Available Items</h2>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} - {item.description}
            <button onClick={() => handleAddItem(item)}>Add to Menu</button>
          </li>
        ))}
      </ul>
      
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {menuItem.name} - {menuItem.price} - {menuItem.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;


