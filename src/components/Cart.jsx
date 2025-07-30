import { XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const Cart = ({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity }) => {
  // Calcola il totale del carrello
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = subtotal > 25 ? 0 : 4.99
  const total = subtotal + shipping
  
  const handleCheckout = () => {
    alert('Funzionalità di checkout non ancora implementata!')
  }
  
  return (
    <>
      {/* Carrello laterale */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header del carrello */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Carrello ({items.length})
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        {/* Contenuto del carrello */}
        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            /* Carrello vuoto */
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Il tuo carrello è vuoto</h3>
                <p className="text-gray-500 mb-4">Aggiungi alcuni prodotti per iniziare lo shopping!</p>
                <button 
                  onClick={onClose}
                  className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Continua lo Shopping
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Lista prodotti */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                    {/* Immagine prodotto */}
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    
                    {/* Informazioni prodotto */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        €{item.price.toFixed(2)}
                      </p>
                      
                      {/* Controlli quantità */}
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <MinusIcon className="h-4 w-4 text-gray-600" />
                        </button>
                        
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-medium">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <PlusIcon className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Prezzo totale e rimuovi */}
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="mt-2 p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                        title="Rimuovi dal carrello"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Riepilogo e checkout */}
              <div className="border-t border-gray-200 p-4 space-y-4">
                {/* Riepilogo prezzi */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotale</span>
                    <span className="text-gray-900">€{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Spedizione</span>
                    <span className="text-gray-900">
                      {shipping === 0 ? 'Gratuita' : `€${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {subtotal < 25 && shipping > 0 && (
                    <p className="text-xs text-orange-600">
                      Aggiungi €{(25 - subtotal).toFixed(2)} per la spedizione gratuita!
                    </p>
                  )}
                  
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-gray-900">Totale</span>
                      <span className="text-gray-900">€{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Pulsanti azione */}
                <div className="space-y-2">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Procedi al Checkout
                  </button>
                  
                  <button
                    onClick={onClose}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Continua lo Shopping
                  </button>
                </div>
                
                {/* Metodi di pagamento accettati */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">Metodi di pagamento accettati:</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      VISA
                    </div>
                    <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      MC
                    </div>
                    <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      PP
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart