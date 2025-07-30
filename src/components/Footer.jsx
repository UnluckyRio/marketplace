const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Sezione principale del footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informazioni azienda */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">MarketPlace</h3>
            <p className="text-gray-300 mb-4">
              Il tuo marketplace di fiducia per prodotti di qualità a prezzi competitivi. 
              Spedizione veloce e resi gratuiti.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons */}
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.007 0C5.373 0 0 5.373 0 12.007s5.373 12.007 12.007 12.007 12.007-5.373 12.007-12.007S18.641.001 12.007.001zM8.84 18.32v-6.54H6.46v6.54H8.84zM7.65 10.56c.77 0 1.39-.62 1.39-1.39s-.62-1.39-1.39-1.39-1.39.62-1.39 1.39.62 1.39 1.39 1.39zM18.32 18.32v-3.66c0-1.95-.42-3.45-2.7-3.45-1.1 0-1.83.6-2.13 1.17h-.03v-.99h-2.16v6.54h2.25v-3.24c0-.94.18-1.86 1.35-1.86 1.15 0 1.17 1.08 1.17 1.92v3.18h2.25z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Servizio clienti */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servizio Clienti</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Centro Assistenza</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contattaci</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Resi e Rimborsi</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Spedizioni</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Garanzie</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Informazioni */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informazioni</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Carriere</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sostenibilità</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Investitori</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Affiliazioni</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Iscriviti per ricevere offerte esclusive e novità sui prodotti.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="La tua email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Iscriviti
              </button>
            </form>
            
            {/* App download */}
            <div className="mt-6">
              <p className="text-gray-300 mb-3">Scarica la nostra app:</p>
              <div className="flex space-x-2">
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sezione inferiore */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 MarketPlace. Tutti i diritti riservati.
            </div>
            
            {/* Links legali */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Termini di Servizio</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
            
            {/* Metodi di pagamento */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm mr-2">Pagamenti sicuri:</span>
              <div className="flex space-x-1">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  PP
                </div>
                <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  GPay
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer