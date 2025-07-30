import React, { useState } from 'react';
import './App.css';

// Componenti del marketplace
const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <header className="bg-gray-900 text-white">
      {/* Barra superiore */}
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span>Consegna in Italia</span>
            <span>Servizio Clienti</span>
          </div>
          <div className="flex space-x-4">
            <span>Ciao, Accedi</span>
            <span>Ordini e Resi</span>
            <span>Carrello</span>
          </div>
        </div>
      </div>
      
      {/* Barra principale */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-orange-500">
            MarketPlace
          </div>
          
          {/* Barra di ricerca */}
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <select className="bg-gray-200 text-gray-800 px-3 py-2 rounded-l border-r border-gray-300">
                <option>Tutte le categorie</option>
                <option>Elettronica</option>
                <option>Abbigliamento</option>
                <option>Casa e Giardino</option>
                <option>Sport</option>
              </select>
              <input
                type="text"
                placeholder="Cerca prodotti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-r transition-colors">
                🔍
              </button>
            </div>
          </div>
          
          {/* Icone destra */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-xs">Ciao</div>
              <div className="font-semibold">Account</div>
            </div>
            <div className="text-center">
              <div className="text-xs">Resi</div>
              <div className="font-semibold">& Ordini</div>
            </div>
            <div className="relative">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu categorie */}
      <div className="bg-gray-700 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-orange-500 transition-colors">Tutte le categorie</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Bestseller</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Offerte del giorno</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Elettronica</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Moda</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Casa</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Sport</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Componente ProductCard
const ProductCard = ({ product }) => {
  return (
    <div className="card hover:scale-105 transition-transform">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{product.discount}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm mr-2">
                €{product.originalPrice}
              </span>
            )}
            <span className="text-xl font-bold text-gray-900">
              €{product.price}
            </span>
          </div>
          <button className="btn-primary text-sm">
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </div>
  );
};

// Dati di esempio per i prodotti
const sampleProducts = [
  {
    id: 1,
    name: "Smartphone Samsung Galaxy S24 Ultra 256GB",
    price: 899.99,
    originalPrice: 1199.99,
    discount: 25,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Laptop Dell XPS 13 Intel Core i7",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    rating: 4.8,
    reviews: 856,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Cuffie Wireless Sony WH-1000XM5",
    price: 279.99,
    originalPrice: 349.99,
    discount: 20,
    rating: 4.7,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Apple Watch Series 9 GPS 45mm",
    price: 429.99,
    rating: 4.6,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Tablet iPad Air 5ª generazione",
    price: 649.99,
    originalPrice: 729.99,
    discount: 11,
    rating: 4.4,
    reviews: 967,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Console PlayStation 5 Digital Edition",
    price: 399.99,
    rating: 4.9,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop"
  }
];

// Componente principale App
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner principale */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Benvenuto nel nostro MarketPlace
          </h1>
          <p className="text-xl mb-8">
            Scopri milioni di prodotti con consegna veloce e prezzi imbattibili
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Inizia a comprare
          </button>
        </div>
      </section>
      
      {/* Sezione prodotti in evidenza */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Prodotti in evidenza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Conoscici</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Chi siamo</a></li>
                <li><a href="#" className="hover:text-white">Carriere</a></li>
                <li><a href="#" className="hover:text-white">Sostenibilità</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Servizi</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Spedizioni</a></li>
                <li><a href="#" className="hover:text-white">Resi</a></li>
                <li><a href="#" className="hover:text-white">Garanzie</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Supporto</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Centro assistenza</a></li>
                <li><a href="#" className="hover:text-white">Contattaci</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Seguici</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-orange-500">📘</a>
                <a href="#" className="text-2xl hover:text-orange-500">📷</a>
                <a href="#" className="text-2xl hover:text-orange-500">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MarketPlace. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
