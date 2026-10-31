import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ShoppingCart, Leaf, ArrowLeft } from "lucide-react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList, { plants } from "./ProductList";
import CartItem from "./CartItem";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => setCart(items => items.some(i => i.id === plant.id) ? items : [...items, {...plant, quantity: 1}]);
  const updateQuantity = (id, delta) => setCart(items => items.map(i => i.id === id ? {...i, quantity: Math.max(1, i.quantity + delta)} : i));
  const removeItem = (id) => setCart(items => items.filter(i => i.id !== id));
  const count = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);
  return <div className="app">
    <header className="navbar"><button className="brand" onClick={() => setPage("home")}><Leaf size={22}/> Paradise Nursery</button><nav><button onClick={() => setPage("home")}>Home</button><button onClick={() => setPage("plants")}>Plants</button><button className="cart-link" onClick={() => setPage("cart")}><ShoppingCart size={19}/> Cart <span>{count}</span></button></nav></header>
    {page === "home" && <main className="hero"><div><p className="eyebrow">Bring nature home</p><h1>Grow a happier<br/><em>home.</em></h1><p>Beautiful, healthy houseplants selected to make every room feel alive.</p><button className="primary" onClick={() => setPage("plants")}>Get Started <ArrowLeft size={18} className="flip"/></button></div><AboutUs/></main>}
    {page === "plants" && <ProductList plants={plants} cart={cart} addToCart={addToCart} />}
    {page === "cart" && <CartItem cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} continueShopping={() => setPage("plants")} />}
  </div>
}


