import React from 'react';
import { DiseaseRisk } from '../types';

interface FeatureImportanceChartProps {
  prediction: DiseaseRisk;
}

const FeatureImportanceChart: React.FC<FeatureImportanceChartProps> = ({ prediction }) => {
  // Sort factors by importance (highest first)
  const sortedFactors = [...prediction.contributingFactors].sort(
    (a, b) => b.importance - a.importance
  );

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Key Factors for {prediction.diseaseName}
      </h3>
      
      <div className="space-y-4">
        {sortedFactors.map((factor, index) => {
          // Calculate a color based on importance (higher importance = more intense color)
          const colorIntensity = Math.floor(factor.importance * 100);
          const barColor = `hsla(210, 100%, ${Math.max(40, 60 - colorIntensity / 3)}%, 1)`;
          
          return (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{factor.factor}</span>
                <span className="text-sm text-gray-500">{(factor.importance * 100).toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${factor.importance * 100}%`,
                    backgroundColor: barColor
                  }}
                />
              </div>
              <p className="text-xs text-gray-500">{factor.description}</p>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          Feature importance shows how much each factor contributes to the prediction, based on the model's analysis of your health data.
        </p>
      </div>
    </div>
  );
};

export default FeatureImportanceChart;