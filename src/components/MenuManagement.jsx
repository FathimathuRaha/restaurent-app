import React, { useState } from 'react';

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState({ name: '', price: '', description: '' });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenuItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddMenuItem = () => {
    setMenuItems([...menuItems, newMenuItem]);
    setNewMenuItem({ name: '', price: '', description: '' });
  };

  const handleEditMenuItem = (index) => {
    setEditIndex(index);
    setNewMenuItem(menuItems[index]);
  };

  const handleUpdateMenuItem = () => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[editIndex] = newMenuItem;
    setMenuItems(updatedMenuItems);
    setEditIndex(-1);
    setNewMenuItem({ name: '', price: '', description: '' });
  };

  const handleDeleteMenuItem = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems.splice(index, 1);
    setMenuItems(updatedMenuItems);
  };

  return (
    <div>
      <h2>Menu Management</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newMenuItem.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={newMenuItem.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newMenuItem.description}
          onChange={handleInputChange}
        />
        {editIndex === -1 ? (
          <button onClick={handleAddMenuItem}>Add</button>
        ) : (
          <button onClick={handleUpdateMenuItem}>Update</button>
        )}
      </div>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <div>{menuItem.name}</div>
            <div>{menuItem.price}</div>
            <div>{menuItem.description}</div>
            <button onClick={() => handleEditMenuItem(index)}>Edit</button>
            <button onClick={() => handleDeleteMenuItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuManagement;
