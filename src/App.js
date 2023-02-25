import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Due to Error: "react_devtools_backend.js:2655 MUI: The `styles` argument provided is invalid.
// You are providing a function without a theme in the context.
// One of the parent elements needs to use a ThemeProvider."
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#3f51b5',
  //   },
  //   secondary: {
  //     main: '#f50057',
  //   },
  // },
});


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  console.log(cart)
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Products products={products} onAddToCart={handleAddToCart} />            
          </div>
    </ThemeProvider>
      );
}

          export default App;