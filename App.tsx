import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import PredictionPage from './pages/PredictionPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'prediction'>('home');

  // Navigation handler that can be passed to child components
  const navigateTo = (page: 'home' | 'prediction') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? (
        <HomePage onNavigate={navigateTo} />
      ) : (
        <PredictionPage onNavigate={navigateTo} />
      )}
      
      {/* Quick navigation controls for demo purposes */}
      <div className="fixed bottom-8 right-8 z-50 flex space-x-4">
        <button 
          onClick={() => navigateTo('home')}
          className={`px-4 py-2 rounded-md shadow-md text-sm font-medium transition-all duration-300 ${
            currentPage === 'home' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => navigateTo('prediction')}
          data-nav="prediction"
          className={`px-4 py-2 rounded-md shadow-md text-sm font-medium transition-all duration-300 ${
            currentPage === 'prediction' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Prediction
        </button>
      </div>
    </div>
  );
}

export default App;