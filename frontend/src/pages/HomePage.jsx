import React, { useState, useEffect } from 'react';
import '../style/Banner.css'

const HomePage = () => {
  const [products, setProducts] = useState([]);
  
  // Fetch products when the component is mounted
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();  // Fetch products from API
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    loadProducts();
  }, []); // Empty array ensures this runs only once on component mount

  // Handle Add to Cart button (placeholder function)
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Logic for adding product to the cart can go here
  };


  // *********image Currossal ********
  const banners = [
    "https://static.vecteezy.com/system/resources/thumbnails/002/216/694/small_2x/shopping-trendy-banner-vector.jpg",
    "https://img.freepik.com/free-psd/online-shopping-banner-template_23-2148900156.jpg?semt=ais_hybrid",
    "https://img.freepik.com/free-vector/flat-landing-page-template-11-11-sale-event_23-2150815332.jpg?semt=ais_hybrid",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="home-page">
      <h2 className='welcome'>Welcome to Our Store</h2>
      <div className="banner-slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div className="slide" key={index}>
            <img src={banner} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>

    <h2 id='offer'>Offers</h2>
  <div className='offer'>
    <div><img src="https://tse1.mm.bing.net/th?id=OIP.d2HIo5-Y4paWDSLxv_AbEAHaHa&pid=Api&P=0&h=180" alt="" /></div>
    <div><img src="https://tse1.mm.bing.net/th?id=OIP.sb9O9zCjQQlryPLyv45uvwHaGz&pid=Api&P=0&h=180" alt="" /></div>
    <div><img src="https://tse4.mm.bing.net/th?id=OIP.E0Jv1ptFkZY8mQ_U0Xu4EAHaHa&pid=Api&P=0&h=180" alt="" /></div>
    <div><img src="https://tse1.mm.bing.net/th?id=OIP.QQfQNHqF4UtIwgNlzm-9zwHaI4&pid=Api&P=0&h=180" alt="" /></div>
    <div><img src="https://tse2.mm.bing.net/th?id=OIP.CuIsPoKIYVJgsCW92vGAdwHaJ4&pid=Api&P=0&h=180" alt="" /></div>
  </div>
  <div className="women-cloth">
    <img src="https://marketplace.canva.com/EAFVHstxnwk/1/0/800w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-yv-HRWs1aMc.jpg" alt="" />
  </div>
  <div className="mens-cloth">
    <img src="http://www.alexinternational.ro/wp-content/uploads/2016/02/BANNER-MENS-CLOTHING-1024x213.jpg" alt="" />
  </div>
      
    </div>
  );
};

export default HomePage;