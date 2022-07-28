import React, { useState } from 'react';
import './App.css';
import productData from './products.json';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (id) => {
    const filtered = products.filter(elem => elem._id !== id)
    setProducts(filtered)
  }

  const handleSearch = (e) => {
    if  (e.target.value === ''){
      setProducts(productData)
    } else {
      const filtered = products.filter(elem => elem.name.toLowerCase().includes(e.target.value))
      setProducts(filtered)
    }
  }

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <input type="text" placeholder='search' onChange={handleSearch}/>
      {products.map((elem) => {
        return (<div className="products" key={elem._id}>
        <p>{elem.name}</p>
        <button onClick={() => handleDelete(elem._id)}>Delete</button>
        </div>)
      })}

      {/* Your code goes here */}

    </div>
  );
}

export default App;
