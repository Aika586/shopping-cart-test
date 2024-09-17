import { useState, useEffect } from "react";

function App() {
 

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from json-server
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App
