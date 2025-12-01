import './CustomerHome.css';
import { useState } from 'react';
import { CategoryNavigation } from './CategoryNavigation';
import { Footer } from './Footer';
import { Header } from './Header';

const mockProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2499,
    image:
      'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 3999,
    image:
      'https://images.pexels.com/photos/2773942/pexels-photo-2773942.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'DSLR Camera',
    price: 28999,
    image:
      'https://images.pexels.com/photos/65538/pexels-photo-65538.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 1799,
    image:
      'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const CustomerHome = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleAddToCart = (product) => {
    // Placeholder for future cart logic
    // eslint-disable-next-line no-alert
    alert(`${product.name} added to cart!`);
  };

  const cartCount = 3;
  const username = 'Customer';

  return (
    <div className="customer-home-container">
      <Header cartCount={cartCount} username={username} />

      {/* Product Display Section */}
      <main className="customer-main">
        <div className="section-header">
          <h1 className="section-title">Featured Products</h1>
          <p className="section-subtitle">
            Discover curated picks just for you. Add your favourites to the cart in one click.
          </p>
        </div>

        <CategoryNavigation onCategoryClick={setActiveCategory} />

        <div className="product-grid">
          {mockProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">₹ {product.price.toLocaleString('en-IN')}</p>
              </div>
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomerHome;