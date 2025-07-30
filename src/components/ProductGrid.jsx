import { useState } from 'react'
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline'

// Dati di esempio per i prodotti
const sampleProducts = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    originalPrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    rating: 4.8,
    reviews: 2847,
    category: 'Elettronica',
    discount: 8
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 1399.99,
    originalPrice: 1499.99,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
    rating: 4.9,
    reviews: 1523,
    category: 'Elettronica',
    discount: 7
  },
  {
    id: 3,
    name: 'Nike Air Max 270',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    rating: 4.6,
    reviews: 892,
    category: 'Moda',
    discount: 17
  },
  {
    id: 4,
    name: 'Sony WH-1000XM4',
    price: 279.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    rating: 4.7,
    reviews: 1247,
    category: 'Elettronica',
    discount: 20
  },
  {
    id: 5,
    name: 'Samsung 4K Smart TV 55"',
    price: 699.99,
    originalPrice: 899.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
    rating: 4.5,
    reviews: 634,
    category: 'Elettronica',
    discount: 22
  },
  {
    id: 6,
    name: 'Adidas Ultraboost 22',
    price: 189.99,
    originalPrice: 219.99,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400',
    rating: 4.4,
    reviews: 456,
    category: 'Sport',
    discount: 14
  },
  {
    id: 7,
    name: 'Canon EOS R6 Mark II',
    price: 2499.99,
    originalPrice: 2699.99,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400',
    rating: 4.9,
    reviews: 287,
    category: 'Elettronica',
    discount: 7
  },
  {
    id: 8,
    name: 'Levi\'s 501 Original Jeans',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    rating: 4.3,
    reviews: 1834,
    category: 'Moda',
    discount: 18
  }
]

const ProductCard = ({ product, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleAddToCart = async () => {
    setIsLoading(true)
    // Simula un piccolo delay per l'aggiunta al carrello
    setTimeout(() => {
      onAddToCart(product)
      setIsLoading(false)
    }, 300)
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Immagine del prodotto */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge sconto */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
        
        {/* Pulsante preferiti */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          {isFavorite ? (
            <HeartIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartOutlineIcon className="h-5 w-5 text-gray-400" />
          )}
        </button>
      </div>
      
      {/* Informazioni prodotto */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        {/* Prezzo */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              €{product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                €{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        {/* Pulsante aggiungi al carrello */}
        <button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full bg-orange-400 hover:bg-orange-500 disabled:bg-orange-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            'Aggiungi al Carrello'
          )}
        </button>
      </div>
    </div>
  )
}

const ProductGrid = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Tutti')
  const [sortBy, setSortBy] = useState('featured')
  
  const categories = ['Tutti', 'Elettronica', 'Moda', 'Sport', 'Casa']
  
  const filteredProducts = selectedCategory === 'Tutti' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory)
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'discount':
        return b.discount - a.discount
      default:
        return 0
    }
  })
  
  return (
    <div>
      {/* Filtri e ordinamento */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        {/* Filtri categoria */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-400 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Ordinamento */}
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="featured">In evidenza</option>
          <option value="price-low">Prezzo: dal più basso</option>
          <option value="price-high">Prezzo: dal più alto</option>
          <option value="rating">Valutazione più alta</option>
          <option value="discount">Sconto maggiore</option>
        </select>
      </div>
      
      {/* Griglia prodotti */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      
      {/* Messaggio se nessun prodotto trovato */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nessun prodotto trovato in questa categoria.</p>
        </div>
      )}
    </div>
  )
}

export default ProductGrid