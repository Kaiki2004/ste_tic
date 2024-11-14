import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/componentsshop/ProductList';
import Cart from '../components/componentsshop/Cart';
import { FaShoppingCart } from 'react-icons/fa';
import { listAllProducts } from '../services/api_integracao';
import { each } from 'chart.js/helpers';
import { Product } from '../types/site';




const Home: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product []> ([])

  useEffect(()=> {
    fetchProducts()
  },[])
  const fetchProducts =  async () => {
    const products = await listAllProducts();
    setProducts(products)
  }

  const addToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setCart((prevCart) => {
        const itemInCart = prevCart.find((item) => item.id === id);
        if (itemInCart) {
          return prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/pix');
  };

  return (
    <div className=" p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Bazar SFITC</h1>
      <div className="flex flex-row items-start">
        {/* Lista de Produtos */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductList products={products} onAddToCart={addToCart} />
        </div>
        {/* Carrinho */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg ml-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaShoppingCart className="mr-2 text-blue-500" /> Carrinho
          </h2>
          <Cart items={cart} onRemoveFromCart={removeFromCart} onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default Home;
