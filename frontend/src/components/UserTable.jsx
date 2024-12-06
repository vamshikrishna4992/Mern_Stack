import React, { useState, useEffect } from 'react';
import '../style/Table.css'
import { fetchUsers, updateUser, deleteUser } from '../services/apiUsers';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingUserData, setEditingUserData] = useState({ name: '', email: '' });

  // Load users when the component mounts
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users.');
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Start editing a user
  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditingUserData({ name: user.name, email: user.email });
  };

  // Handle changes to the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUserData({ ...editingUserData, [name]: value });
  };

  // Save the updated user
  const handleSaveClick = async () => {
    try {
      const updatedUser = await updateUser(editingUserId, editingUserData);
      setUsers(users.map((user) => (user._id === editingUserId ? updatedUser : user)));
      setEditingUserId(null);
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  // Cancel editing
  const handleCancelClick = () => {
    setEditingUserId(null);
  };

  // Delete a user
  const handleDeleteClick = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  // Handle conditional rendering
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div className="user-table">
      <h2>User Management</h2>
      <table border="1" className='styled-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              {editingUserId === user._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editingUserData.name}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editingUserData.email}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="action-buttons">
                    <button className="btn edit-btn" onClick={handleSaveClick}>Save</button>
                    <button className="btn delete-btn" onClick={handleCancelClick}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="action-buttons">
                    <button className="btn edit-btn" onClick={() => handleEditClick(user)}>Edit</button>
                    <button className="btn delete-btn" onClick={() => handleDeleteClick(user._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;