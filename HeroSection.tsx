import React from 'react';
import { Brain, Activity, FileText, Award } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: 'home' | 'prediction') => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 pb-32 pt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              AI-Powered Disease Prediction for Better Health
            </h1>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl">
              Early detection can save lives. Our advanced machine learning system analyzes your health data to predict disease risks before symptoms appear.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('prediction')}
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
              >
                Start Prediction
              </button>
              <button className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white hover:bg-opacity-10 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-500 hover:scale-105">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Health Prediction Summary</h3>
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
                
                {/* Mock Risk Cards */}
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Diabetes Risk</span>
                      <span className="text-sm font-medium text-green-600">Low</span>
                    </div>
                    <div className="mt-2 w-full bg-white rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Heart Disease Risk</span>
                      <span className="text-sm font-medium text-yellow-600">Moderate</span>
                    </div>
                    <div className="mt-2 w-full bg-white rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">Stroke Risk</span>
                      <span className="text-sm font-medium text-blue-600">Low</span>
                    </div>
                    <div className="mt-2 w-full bg-white rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => onNavigate('prediction')}
                    className="text-blue-600 text-sm font-medium hover:text-blue-800 transition duration-300"
                  >
                    View Full Health Report →
                  </button>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-yellow-400 shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-teal-400 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature highlights */}
      <div className="relative max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-white text-lg font-semibold">AI-Powered Analysis</h3>
            <p className="mt-2 text-blue-100">
              Our models are trained on extensive medical datasets for accurate predictions.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Activity className="h-8 w-8 text-purple-700" />
            </div>
            <h3 className="text-white text-lg font-semibold">Risk Assessment</h3>
            <p className="mt-2 text-blue-100">
              Get personalized risk scores for various diseases with clear explanations.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-teal-700" />
            </div>
            <h3 className="text-white text-lg font-semibold">Detailed Reports</h3>
            <p className="mt-2 text-blue-100">
              Receive comprehensive health reports with actionable recommendations.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-amber-700" />
            </div>
            <h3 className="text-white text-lg font-semibold">Medical-Grade</h3>
            <p className="mt-2 text-blue-100">
              Our algorithms are developed in collaboration with healthcare professionals.
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;