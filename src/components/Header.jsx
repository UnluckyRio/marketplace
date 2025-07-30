import { useState } from 'react'
import { ShoppingCartIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = ({ cartItemsCount, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [registerForm, setRegisterForm] = useState({
    nome: '',
    email: '',
    password: '',
    confermaPassword: ''
  })
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  
  const handleSearch = (e) => {
    e.preventDefault()
    // Implementare la logica di ricerca qui
    console.log('Ricerca per:', searchQuery)
  }

  // Gestione del form di registrazione
  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target
    setRegisterForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    
    // Validazione semplice
    if (registerForm.password !== registerForm.confermaPassword) {
      alert('Le password non coincidono!')
      return
    }
    
    if (registerForm.password.length < 6) {
      alert('La password deve essere di almeno 6 caratteri!')
      return
    }
    
    // Qui implementare la logica di registrazione
    console.log('Dati registrazione:', registerForm)
    alert('Registrazione completata con successo!')
    
    // Reset form e chiudi modale
    setRegisterForm({
      nome: '',
      email: '',
      password: '',
      confermaPassword: ''
    })
    setIsRegisterModalOpen(false)
  }

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false)
    setRegisterForm({
      nome: '',
      email: '',
      password: '',
      confermaPassword: ''
    })
  }

  // Funzioni per il modale di accesso
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    
    // Qui implementare la logica di accesso
    console.log('Dati accesso:', loginForm)
    alert('Accesso effettuato con successo!')
    
    // Reset form e chiudi modale
    setLoginForm({
      email: '',
      password: ''
    })
    setIsLoginModalOpen(false)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
    setLoginForm({
      email: '',
      password: ''
    })
  }

  const switchToRegister = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true)
  }

  // Funzione per passare dal modale di registrazione a quello di accesso
  const switchToLogin = () => {
    setIsRegisterModalOpen(false)
    setIsLoginModalOpen(true)
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
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="hover:text-orange-400"
            >
              Accedi
            </button>
            <button 
              onClick={() => setIsRegisterModalOpen(true)}
              className="hover:text-orange-400 transition-colors"
            >
              Registrati
            </button>
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
            <div className="flex items-center space-x-2">
              {/* Icona SVG del marketplace */}
              <svg 
                 className="h-8 w-8 text-orange-400" 
                 fill="currentColor" 
                 viewBox="0 0 24 24"
               >
                 <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
               </svg>
              <h1 className="text-2xl font-bold text-orange-400">
                MarketPlace
              </h1>
            </div>
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

      {/* Modale di Registrazione */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative border-2 border-orange-400">
            {/* Pulsante chiudi */}
            <button
              onClick={closeRegisterModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Titolo */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registrati</h2>

            {/* Form di registrazione */}
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              {/* Campo Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={registerForm.nome}
                  onChange={handleRegisterInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Inserisci il tuo nome completo"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registerForm.email}
                  onChange={handleRegisterInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Inserisci la tua email"
                />
              </div>

              {/* Campo Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={registerForm.password}
                  onChange={handleRegisterInputChange}
                  required
                  minLength="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Minimo 6 caratteri"
                />
              </div>

              {/* Campo Conferma Password */}
              <div>
                <label htmlFor="confermaPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Conferma Password
                </label>
                <input
                  type="password"
                  id="confermaPassword"
                  name="confermaPassword"
                  value={registerForm.confermaPassword}
                  onChange={handleRegisterInputChange}
                  required
                  minLength="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Ripeti la password"
                />
              </div>

              {/* Pulsanti */}
              <div className="flex space-x-4 pt-4">
                <button
                   type="button"
                   onClick={closeRegisterModal}
                   className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 hover:border-orange-400 transition-colors"
                 >
                   Annulla
                 </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition-colors"
                >
                  Registrati
                </button>
              </div>
            </form>
            
            {/* Link per passare al modale di accesso */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Sei già iscritto?{' '}
                <button
                  type="button"
                  onClick={switchToLogin}
                  className="text-orange-500 hover:text-orange-600 font-medium underline"
                >
                  Premi qui per accedere
                </button>
              </p>
            </div>
          </div>
         </div>
       )}

       {/* Modale di Accesso */}
       {isLoginModalOpen && (
         <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999]">
           <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative border-2 border-orange-400">
             {/* Pulsante chiudi */}
             <button
               onClick={closeLoginModal}
               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
             >
               <XMarkIcon className="h-6 w-6" />
             </button>

             {/* Titolo */}
             <h2 className="text-2xl font-bold text-gray-900 mb-6">Accedi</h2>

             {/* Form di accesso */}
             <form onSubmit={handleLoginSubmit} className="space-y-4">
               {/* Campo Email */}
               <div>
                 <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-1">
                   Email
                 </label>
                 <input
                   type="email"
                   id="loginEmail"
                   name="email"
                   value={loginForm.email}
                   onChange={handleLoginInputChange}
                   required
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                   placeholder="Inserisci la tua email"
                 />
               </div>

               {/* Campo Password */}
               <div>
                 <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-1">
                   Password
                 </label>
                 <input
                   type="password"
                   id="loginPassword"
                   name="password"
                   value={loginForm.password}
                   onChange={handleLoginInputChange}
                   required
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                   placeholder="Inserisci la tua password"
                 />
               </div>

               {/* Link per registrazione */}
               <div className="text-center text-sm text-gray-600">
                 Non sei ancora iscritto?{' '}
                 <button
                   type="button"
                   onClick={switchToRegister}
                   className="text-orange-400 hover:text-orange-500 font-medium"
                 >
                   Premi qui per registrarti
                 </button>
               </div>

               {/* Pulsanti */}
               <div className="flex space-x-4 pt-4">
                 <button
                    type="button"
                    onClick={closeLoginModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 hover:border-orange-400 transition-colors"
                  >
                    Annulla
                  </button>
                 <button
                   type="submit"
                   className="flex-1 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition-colors"
                 >
                   Accedi
                 </button>
               </div>
             </form>
           </div>
         </div>
       )}
     </header>
   )
}

export default Header