import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

interface HomePageProps {
  onNavigate: (page: 'home' | 'prediction') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={onNavigate} />
      <HeroSection onNavigate={onNavigate} />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered system uses machine learning to analyze your health data and predict disease risks before symptoms appear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Input Your Health Data</h3>
              <p className="text-gray-600">
                Enter your medical history, symptoms, lifestyle factors, and diagnostic test results securely.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced machine learning algorithms analyze your data against vast medical datasets.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Personalized Insights</h3>
              <p className="text-gray-600">
                Receive detailed risk assessments, explanations, and actionable health recommendations.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate('prediction')}
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Try Disease Prediction Now
            </button>
          </div>
        </div>
      </div>
      
      <InfoSection />
      <Footer />
    </div>
  );
};

export default HomePage;