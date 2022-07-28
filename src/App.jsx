import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (id) => {
    const filtered = products.filter(elem => elem._id !== id)
    setProducts(filtered)
  }

  const handleSearch = (searchValue) => {
    if  (searchValue === ''){
      setProducts(productData)
    } else {
      const filtered = products.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
      setProducts(filtered)
    }
  }

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <SearchBar onSearch={handleSearch}/>
      {products.map((elem) => {
        return <ProductCard key={elem._id} product={elem} onDelete={handleDelete} />
      })}

      {/* Your code goes here */}

    </div>
  );
}

export default App;
