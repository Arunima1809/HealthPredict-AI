import React from 'react';
import { diseases } from '../data/mockData';
import { Heart, Settings as Lungs, Droplet, Activity } from 'lucide-react';

const DiseaseIcon = ({ id }: { id: string }) => {
  switch (id) {
    case 'diabetes':
      return <Droplet className="h-6 w-6 text-blue-500" />;
    case 'heart-disease':
      return <Heart className="h-6 w-6 text-red-500" />;
    case 'stroke':
      return <Activity className="h-6 w-6 text-purple-500" />;
    case 'copd':
      return <Lungs className="h-6 w-6 text-teal-500" />;
    default:
      return <Activity className="h-6 w-6 text-gray-500" />;
  }
};

const InfoSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Disease Information Center</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about common diseases, their risk factors, symptoms, and prevention strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diseases.map((disease) => (
            <div 
              key={disease.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-gray-100 mr-3">
                    <DiseaseIcon id={disease.id} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{disease.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{disease.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Risk Factors</h4>
                  <div className="flex flex-wrap gap-2">
                    {disease.riskFactors.map((factor, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700"
                      >
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Common Symptoms</h4>
                  <div className="flex flex-wrap gap-2">
                    {disease.symptoms.map((symptom, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 text-xs rounded-full bg-red-50 text-red-700"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Prevention</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {disease.preventiveMeasures.slice(0, 3).map((measure, index) => (
                      <li key={index}>{measure}</li>
                    ))}
                    {disease.preventiveMeasures.length > 3 && (
                      <li className="text-blue-600 cursor-pointer hover:underline">
                        + {disease.preventiveMeasures.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition duration-300">
                    Learn more about {disease.name} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View Disease Encyclopedia
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;