import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PredictionForm from '../components/PredictionForm';
import PredictionResultComponent from '../components/PredictionResult';
import { PatientData, PredictionResult } from '../types';
import { generatePredictions } from '../data/mockData';

interface PredictionPageProps {
  onNavigate: (page: 'home' | 'prediction') => void;
}

const PredictionPage: React.FC<PredictionPageProps> = ({ onNavigate }) => {
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (data: PatientData) => {
    setIsLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      const result = generatePredictions(data);
      setPredictionResult(result);
      setIsLoading(false);
    }, 2000);
  };
  
  const handleNewPrediction = () => {
    setPredictionResult(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onNavigate={onNavigate} />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Disease Prediction Tool</h1>
            <p className="mt-2 text-lg text-gray-600">
              Enter your health information to receive personalized disease risk predictions.
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 text-lg">Analyzing your health data...</p>
              <p className="mt-2 text-gray-500 text-sm">This may take a few moments</p>
            </div>
          ) : predictionResult ? (
            <PredictionResultComponent result={predictionResult} onNewPrediction={handleNewPrediction} />
          ) : (
            <PredictionForm onSubmit={handleSubmit} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PredictionPage;