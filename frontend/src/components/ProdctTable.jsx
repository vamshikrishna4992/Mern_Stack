import React, { useState, useEffect } from 'react';
import '../style/Table.css'
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../services/apiProducts.js';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
  });
  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
  });

  // Fetch products when the component mounts
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    loadProducts();
  }, []);

  // Handle Add Product form submission
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const addedProduct = await createProduct(newProduct); // API call to create product
      setProducts([...products, addedProduct]); // Update the products list
      setNewProduct({ name: '', price: '', category: '', image:'' }); // Reset the form
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Handle Edit functionality
  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setEditedProduct({ ...product }); // Copy product data to the editing state
  };

  // Save the updated product data
  const handleSave = async () => {
    try {
      await updateProduct(editingProductId, editedProduct); // API call to update product
      setProducts(products.map((p) => (p._id === editingProductId ? editedProduct : p))); // Update state with edited product
      setEditingProductId(null); // Exit editing mode
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Handle Delete functionality
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id); // API call to delete product
      setProducts(products.filter((p) => p._id !== id)); // Remove deleted product from state
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h3>Product Management</h3>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct}>
        <h4>Add New Product</h4>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image Url"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Product Table */}
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                {(
                  product.name
                )}
              </td>
              <td>
                {editingProductId === product._id ? (
                  <input
                    type="number"
                    value={editedProduct.price}
                    onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                  />
                ) : (
                  product.price
                )}
              </td>
              <td>
                {editingProductId === product._id ? (
                  <input
                    type="text"
                    value={editedProduct.category}
                    onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
                  />
                ) : (
                  product.category
                )}
              </td>
              <td>
                {editingProductId === product._id ? (
                  <input
                    type="text"
                    value={editedProduct.image}
                    onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
                  />
                ) : (
                  product.image
                )}
              </td>
              <td  className="action-buttons">
                {editingProductId === product._id ? (
                  <button className="btn edit-btn" onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button className="btn edit-btn" onClick={() => handleEdit(product)}>Edit</button>
                    <button className="btn delete-btn" onClick={() => handleDelete(product._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;