import React, { useState } from 'react';
import { PatientData } from '../types';
import { symptomsList, familyHistoryConditions } from '../data/mockData';

interface PredictionFormProps {
  onSubmit: (data: PatientData) => void;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<PatientData>({
    age: 30,
    gender: 'male',
    height: 170,
    weight: 70,
    bloodPressureSystolic: 120,
    bloodPressureDiastolic: 80,
    cholesterolLevel: 180,
    bloodSugar: 90,
    smokingStatus: 'never',
    alcoholConsumption: 'none',
    physicalActivity: 'moderate',
    familyHistory: [],
    symptoms: []
  });

  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'symptoms' | 'familyHistory') => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, [category]: [...formData[category], value] });
    } else {
      setFormData({
        ...formData,
        [category]: formData[category].filter(item => item !== value)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const nextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Data Input</h2>
      
      <div className="mb-6">
        <div className="flex justify-between">
          {Array.from({ length: totalSections }).map((_, index) => (
            <div 
              key={index} 
              className={`h-2 rounded-full transition-all duration-300 ${
                index <= currentSection ? 'bg-blue-600 w-full' : 'bg-gray-200 w-full'
              } ${index < totalSections - 1 ? 'mr-1' : ''}`}
            />
          ))}
        </div>
        <div className="text-sm text-gray-500 mt-2">
          Step {currentSection + 1} of {totalSections}
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Section 1: Basic Information */}
        <div className={currentSection === 0 ? 'block' : 'hidden'}>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="1"
                max="120"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="height">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="50"
                max="250"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="weight">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="1"
                max="300"
              />
            </div>
          </div>
        </div>
        
        {/* Section 2: Vital Measurements */}
        <div className={currentSection === 1 ? 'block' : 'hidden'}>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Vital Measurements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="bloodPressureSystolic">
                Blood Pressure (Systolic)
              </label>
              <input
                type="number"
                id="bloodPressureSystolic"
                name="bloodPressureSystolic"
                value={formData.bloodPressureSystolic}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="70"
                max="250"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="bloodPressureDiastolic">
                Blood Pressure (Diastolic)
              </label>
              <input
                type="number"
                id="bloodPressureDiastolic"
                name="bloodPressureDiastolic"
                value={formData.bloodPressureDiastolic}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="40"
                max="150"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="cholesterolLevel">
                Cholesterol Level (mg/dL)
              </label>
              <input
                type="number"
                id="cholesterolLevel"
                name="cholesterolLevel"
                value={formData.cholesterolLevel}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="100"
                max="400"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="bloodSugar">
                Blood Sugar (mg/dL)
              </label>
              <input
                type="number"
                id="bloodSugar"
                name="bloodSugar"
                value={formData.bloodSugar}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="50"
                max="300"
              />
            </div>
          </div>
        </div>
        
        {/* Section 3: Lifestyle Factors */}
        <div className={currentSection === 2 ? 'block' : 'hidden'}>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Lifestyle Factors</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="smokingStatus">
                Smoking Status
              </label>
              <select
                id="smokingStatus"
                name="smokingStatus"
                value={formData.smokingStatus}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="never">Never Smoked</option>
                <option value="former">Former Smoker</option>
                <option value="current">Current Smoker</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="alcoholConsumption">
                Alcohol Consumption
              </label>
              <select
                id="alcoholConsumption"
                name="alcoholConsumption"
                value={formData.alcoholConsumption}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="none">None</option>
                <option value="moderate">Moderate</option>
                <option value="heavy">Heavy</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="physicalActivity">
                Physical Activity Level
              </label>
              <select
                id="physicalActivity"
                name="physicalActivity"
                value={formData.physicalActivity}
                onChange={handleInputChange}
                className="shadow-sm rounded-md w-full py-2 px-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="sedentary">Sedentary (Little to no exercise)</option>
                <option value="moderate">Moderate (Exercise 1-3 times/week)</option>
                <option value="active">Active (Exercise 4+ times/week)</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Family History (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {familyHistoryConditions.map((condition) => (
                <div key={condition} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`family-${condition}`}
                    name="familyHistory"
                    value={condition}
                    checked={formData.familyHistory.includes(condition)}
                    onChange={(e) => handleCheckboxChange(e, 'familyHistory')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`family-${condition}`} className="ml-2 text-gray-700">
                    {condition.charAt(0).toUpperCase() + condition.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Section 4: Symptoms */}
        <div className={currentSection === 3 ? 'block' : 'hidden'}>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Symptoms</h3>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Select all symptoms you are experiencing:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {symptomsList.map((symptom) => (
                <div key={symptom} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`symptom-${symptom}`}
                    name="symptoms"
                    value={symptom.toLowerCase()}
                    checked={formData.symptoms.includes(symptom.toLowerCase())}
                    onChange={(e) => handleCheckboxChange(e, 'symptoms')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`symptom-${symptom}`} className="ml-2 text-gray-700">
                    {symptom}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Generate Prediction
            </button>
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={prevSection}
            className={`${
              currentSection === 0 ? 'invisible' : 'visible'
            } px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}
          >
            Previous
          </button>
          
          <button
            type="button"
            onClick={nextSection}
            className={`${
              currentSection === totalSections - 1 ? 'invisible' : 'visible'
            } px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;