import { useState } from 'react'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Stato per gestire i prodotti nel carrello
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  // Funzione per aggiungere prodotti al carrello
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }
  
  // Funzione per rimuovere prodotti dal carrello
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }
  
  // Funzione per aggiornare la quantità nel carrello
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }
  
  // Calcola il totale degli articoli nel carrello
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con barra di ricerca e carrello */}
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      {/* Contenuto principale */}
      <main className="container mx-auto px-4 py-8">
        <ProductGrid onAddToCart={addToCart} />
      </main>
      
      {/* Carrello laterale */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
