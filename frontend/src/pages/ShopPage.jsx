import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import CategoryFilter from '../components/CategoryFilter';
import SortProducts from '../components/SortProducts';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('default'); // Default, Price Low to High, Price High to Low
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
        // Extract categories
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(['All Categories', ...uniqueCategories]); // Add 'All Categories' option
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    applyFiltersAndSorting();
  }, [selectedCategory, sortOrder, products]);


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const applyFiltersAndSorting = () => {
    let currentProducts = [...products];

    // Category Filter
    if (selectedCategory && selectedCategory !== 'All Categories') {
      currentProducts = currentProducts.filter(product => product.category === selectedCategory);
    }

    // Sorting
    if (sortOrder === 'price-low-high') {
      currentProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high-low') {
      currentProducts.sort((a, b) => b.price - a.price);
    } else {
      // default sorting (maybe by id or name, or as received)
      // For now, keeping default as is, no explicit sort needed
    }
    setFilteredProducts(currentProducts);
  };


  return (
    <div className="shop-page">
      <h2>Shop Our Collection</h2>
      <p style={{textAlign: 'center', fontSize: '1.1em', color: '#777', marginBottom: '30px', letterSpacing: '0.04em'}}>
        Explore our curated selection of modern and elegant women's apparel.
      </p>

      <div className="shop-controls">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
         <SortProducts
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />
      </div>


      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
