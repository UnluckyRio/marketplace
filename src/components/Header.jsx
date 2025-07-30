import { useState } from 'react'
import { ShoppingCartIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'

const Header = ({ cartItemsCount, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const handleSearch = (e) => {
    e.preventDefault()
    // Implementare la logica di ricerca qui
    console.log('Ricerca per:', searchQuery)
  }
  
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      {/* Barra superiore */}
      <div className="bg-gray-800 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span>Spedizione gratuita sopra €25</span>
            <span>•</span>
            <span>Resi gratuiti entro 30 giorni</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400">Accedi</a>
            <a href="#" className="hover:text-orange-400">Registrati</a>
          </div>
        </div>
      </div>
      
      {/* Barra principale */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button className="lg:hidden">
              <Bars3Icon className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-orange-400">
              MarketPlace
            </h1>
          </div>
          
          {/* Barra di ricerca */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cerca prodotti, marchi e molto altro..."
                className="w-full py-3 px-4 pr-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 p-2 rounded-md transition-colors"
              >
                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </form>
          
          {/* Carrello */}
          <button
            onClick={onCartClick}
            className="relative flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-lg transition-colors"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="hidden sm:inline">Carrello</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
      
      {/* Menu di navigazione */}
      <nav className="bg-gray-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            <a href="#" className="whitespace-nowrap hover:text-orange-400 transition-colors">Elettronica</a>
            <a href="#" className="whitespace-nowrap hover:text-orange-400 transition-colors">Moda</a>
            <a href="#" className="whitespace-nowrap hover:text-orange-400 transition-colors">Casa e Giardino</a>
            <a href="#" className="whitespace-nowrap hover:text-orange-400 transition-colors">Sport</a>
            <a href="#" className="whitespace-nowrap hover:text-orange-400 transition-colors">Libri</a>
            <a href="#" className="whitespace-nowrap hover:text-orange-400 transition-colors">Giocattoli</a>
            <a href="#" className="whitespace-nowrap hover:text-orange-400 transition-colors">Bellezza</a>
            <a href="#" className="whitespace-nowrap hover:text-orange-400 transition-colors">Auto e Moto</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header