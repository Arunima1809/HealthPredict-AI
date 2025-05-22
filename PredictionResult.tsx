import React from 'react';
import { PredictionResult, DiseaseRisk } from '../types';
import { BarChart, PieChart, Activity, AlertTriangle, Info, Check } from 'lucide-react';

interface PredictionResultProps {
  result: PredictionResult;
  onNewPrediction: () => void;
}

const PredictionResultComponent: React.FC<PredictionResultProps> = ({ result, onNewPrediction }) => {
  // Sort predictions by risk score (highest first)
  const sortedPredictions = [...result.predictions].sort((a, b) => b.riskScore - a.riskScore);

  const getRiskColor = (riskLevel: string): string => {
    switch (riskLevel) {
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'very-high':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getHealthScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Prediction Results</h2>
        <button
          onClick={onNewPrediction}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          New Prediction
        </button>
      </div>

      {/* Overall Health Score */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
        <div className="flex items-center mb-2">
          <Activity className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Overall Health Score</h3>
        </div>
        <div className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
            <div
              className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-4 rounded-full"
              style={{ width: `${result.overallHealthScore}%` }}
            ></div>
          </div>
          <span className={`text-2xl font-bold ${getHealthScoreColor(result.overallHealthScore)}`}>
            {result.overallHealthScore}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-2">
          {result.overallHealthScore >= 80
            ? 'Excellent health status. Continue maintaining your healthy lifestyle.'
            : result.overallHealthScore >= 60
            ? 'Good health status with some areas for improvement.'
            : result.overallHealthScore >= 40
            ? 'Fair health status. Consider addressing the high-risk areas.'
            : 'Health concerns detected. Please consult with a healthcare professional.'}
        </p>
      </div>

      {/* Risk Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {sortedPredictions.map((prediction, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 border ${getRiskColor(prediction.riskLevel)}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{prediction.diseaseName}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
                {prediction.riskLevel} Risk
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-white rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    prediction.riskLevel === 'low'
                      ? 'bg-green-500'
                      : prediction.riskLevel === 'moderate'
                      ? 'bg-yellow-500'
                      : prediction.riskLevel === 'high'
                      ? 'bg-orange-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${prediction.riskScore}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">Risk Score</span>
                <span className="text-xs font-medium">{prediction.riskScore}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Analysis */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Analysis</h3>
        
        {sortedPredictions.map((prediction, predIndex) => (
          <div key={predIndex} className="mb-8">
            <div className="flex items-center mb-3">
              {prediction.riskLevel === 'high' || prediction.riskLevel === 'very-high' ? (
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
              ) : (
                <Info className="w-5 h-5 text-blue-500 mr-2" />
              )}
              <h4 className="text-md font-medium text-gray-800">{prediction.diseaseName}</h4>
            </div>
            
            <div className="pl-7">
              {/* Contributing Factors */}
              <p className="text-sm text-gray-600 mb-2">Key contributing factors:</p>
              <div className="space-y-3 mb-4">
                {prediction.contributingFactors.map((factor, factorIndex) => (
                  <div key={factorIndex} className="bg-gray-50 rounded-md p-3 border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{factor.factor}</span>
                      <span className="text-xs text-gray-500">
                        Impact: {Math.round(factor.importance * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{ width: `${factor.importance * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600">{factor.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Recommendations */}
              <p className="text-sm text-gray-600 mb-2">Recommendations:</p>
              <ul className="space-y-1 mb-3">
                {prediction.recommendations.map((recommendation, recIndex) => (
                  <li key={recIndex} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <BarChart className="w-4 h-4 mr-2" />
            View Full Report
          </button>
          <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <PieChart className="w-4 h-4 mr-2" />
            Compare with Previous
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>
          Disclaimer: This prediction is based on the information provided and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
};

export default PredictionResultComponent;