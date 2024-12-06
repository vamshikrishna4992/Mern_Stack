import React, { useEffect, useState,useContext ,createContext } from "react";
import { fetchProducts } from '../services/apiProducts';
import './Product.css'
const CartContext = createContext();

const ProductPage = ({ children })=>{
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
  
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

  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
     <div className="product-list">
        {/* Display all the products */}
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image || '/default-image.png'} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div> 
  )
}

export default ProductPage;









