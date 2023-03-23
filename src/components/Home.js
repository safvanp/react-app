import React, { useState } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCategories, setShowCategories] = useState(false);
  const categories = [
    { id: 1, name: 'Mobile Phones' },
    { id: 2, name: 'Wireless Neckband' },
    { id: 3, name: 'Bluetooth Speakers' },
    { id: 4, name: 'Car Holder' },
    { id: 5, name: 'Calculator' },
    { id: 6, name: 'Fitnessband' },
    { id: 7, name: 'Bluetooth Headphone' }
  ];
  const items = [

    { id: 1, name: 'Item 1', category: 'Mobile Phones', imageSrc: 'https://i.postimg.cc/DyrdtMjk/61im-Yp-K33q-L-SX679.jpg' },
    { id: 2, name: 'Item 2', category: 'Wireless Neckband', imageSrc: 'https://i.postimg.cc/Z5kYyf4R/neckband.jpg' },
    { id: 3, name: 'Item 3', category: 'Bluetooth Speakers', imageSrc: 'https://i.postimg.cc/9FxZ5w5V/speaker1.jpg' },
    { id: 4, name: 'Item 4', category: 'Mobile Phones', imageSrc: 'https://i.postimg.cc/J0kVrLyQ/redmi.png' },
    { id: 5, name: 'Item 5', category: 'Wireless Neckband', imageSrc: 'https://i.postimg.cc/VNvzx2FK/neck2.jpg' },
    { id: 6, name: 'Item 6', category: 'Bluetooth Speakers', imageSrc: 'https://i.postimg.cc/jdm780Y4/speaker2.jpg' },
    { id: 7, name: 'Item 7', category: 'Car Holder', imageSrc: 'https://i.postimg.cc/2S6VfCnZ/car1.jpg' },
    { id: 8, name: 'Item 8', category: 'Calculator', imageSrc: 'https://i.postimg.cc/k5wCMS9M/calc1.jpg' },
    { id: 9, name: 'Item 9', category: 'Fitnessband', imageSrc: 'https://i.postimg.cc/4yRRBQQ5/band1.jpg' },
    { id: 10, name: 'Item 10', category: 'Bluetooth Headphone', imageSrc: 'https://i.postimg.cc/zf9T2yb7/head1.png' },
    { id: 11, name: 'Item 11', category: 'Car Holder', imageSrc: 'https://i.postimg.cc/0N7vT4XS/car2.jpg' },
    { id: 12, name: 'Item 12', category: 'Calculator', imageSrc: 'https://i.postimg.cc/SxhjJW0c/calc2.jpg' },
    { id: 13, name: 'Item 13', category: 'Fitnessband', imageSrc: 'https://i.postimg.cc/pXqXX3ZM/band2.jpg' },
    { id: 14, name: 'Item 14', category: 'Bluetooth Headphone', imageSrc: 'https://i.postimg.cc/TP9XCD4M/head4.jpg' },
  ];

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      // If clicking on the same category, toggle the activeCategory state to empty string
      setActiveCategory('');
    } else {
      // If clicking on a different category, set the activeCategory state to the new category
      setActiveCategory(category);
    }
  };

  
  return (
    <div className="homepage-container">
      <h1 className="heading">Home</h1>
      <div className="categories-container">
        {showCategories ? (
          <div className="category-browse">
            <h2>Browse Categories</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="category"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            {/* <button className="btn-browse-categories" onClick={handleBrowseCategories}>
              Browse Categories
            </button> */}
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
                {activeCategory === category.name && (
                  <div className="items-container">
                    {items
                      .filter((item) => item.category === category.name)
                      .map((item) => (
                        <div key={item.id} className="item">
                          <img src={item.imageSrc} alt={item.name} className="item-image" />
                          <span id="h1">{item.name}</span>
                          <input
                            type="number"
                            min={1}
                            placeholder=""
                            className="item-quantity"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
        <footer>
          <div className="App">
            <Navbar />
            
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
