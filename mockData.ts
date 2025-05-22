import { PatientData, DiseaseRisk, PredictionResult } from '../types';

export const diseases = [
  {
    id: 'diabetes',
    name: 'Type 2 Diabetes',
    description: 'A chronic condition that affects the way the body processes blood sugar (glucose).',
    riskFactors: ['High blood sugar', 'Obesity', 'Family history', 'Sedentary lifestyle', 'Age'],
    symptoms: ['Increased thirst', 'Frequent urination', 'Fatigue', 'Blurred vision', 'Slow-healing sores'],
    preventiveMeasures: [
      'Maintain healthy weight',
      'Regular physical activity',
      'Balanced diet low in sugar and refined carbohydrates',
      'Regular health check-ups',
      'Limiting alcohol consumption'
    ]
  },
  {
    id: 'heart-disease',
    name: 'Coronary Heart Disease',
    description: 'A type of heart disease that develops when the arteries of the heart cannot deliver enough oxygen-rich blood to the heart.',
    riskFactors: ['High blood pressure', 'High cholesterol', 'Smoking', 'Diabetes', 'Family history', 'Obesity'],
    symptoms: ['Chest pain', 'Shortness of breath', 'Pain in the neck, jaw, or back', 'Nausea', 'Fatigue'],
    preventiveMeasures: [
      'Healthy diet rich in fruits, vegetables, and whole grains',
      'Regular exercise',
      'Avoiding tobacco',
      'Limiting alcohol',
      'Managing stress',
      'Regular check-ups'
    ]
  },
  {
    id: 'stroke',
    name: 'Stroke',
    description: 'A condition in which the brain does not receive enough oxygen or nutrients, resulting in brain cell death.',
    riskFactors: ['High blood pressure', 'Smoking', 'Diabetes', 'High cholesterol', 'Age', 'Obesity', 'Heart disease'],
    symptoms: ['Sudden numbness or weakness in the face, arm, or leg', 'Confusion', 'Trouble speaking', 'Trouble seeing', 'Severe headache'],
    preventiveMeasures: [
      'Managing high blood pressure',
      'Not smoking',
      'Physical activity',
      'Managing diabetes',
      'Healthy diet',
      'Maintaining a healthy weight'
    ]
  },
  {
    id: 'copd',
    name: 'Chronic Obstructive Pulmonary Disease (COPD)',
    description: 'A chronic inflammatory lung disease that causes obstructed airflow from the lungs.',
    riskFactors: ['Smoking', 'Exposure to air pollutants', 'Genetic factors', 'Age'],
    symptoms: ['Shortness of breath', 'Chronic cough', 'Chest tightness', 'Wheezing', 'Fatigue'],
    preventiveMeasures: [
      'Not smoking',
      'Avoiding secondhand smoke and air pollution',
      'Getting vaccinated for flu and pneumonia',
      'Regular exercise'
    ]
  }
];

// Mock function to generate disease risk predictions based on patient data
export const generatePredictions = (data: PatientData): PredictionResult => {
  const predictions: DiseaseRisk[] = [];
  let overallHealthScore = 100;
  
  // Calculate BMI
  const heightInMeters = data.height / 100;
  const bmi = data.weight / (heightInMeters * heightInMeters);
  
  // Diabetes risk calculation (simplified mock)
  const diabetesRisk = calculateDiabetesRisk(data, bmi);
  predictions.push(diabetesRisk);
  overallHealthScore -= diabetesRisk.riskScore * 0.25;
  
  // Heart disease risk calculation (simplified mock)
  const heartDiseaseRisk = calculateHeartDiseaseRisk(data, bmi);
  predictions.push(heartDiseaseRisk);
  overallHealthScore -= heartDiseaseRisk.riskScore * 0.25;
  
  // Stroke risk calculation (simplified mock)
  const strokeRisk = calculateStrokeRisk(data);
  predictions.push(strokeRisk);
  overallHealthScore -= strokeRisk.riskScore * 0.25;
  
  // COPD risk calculation (simplified mock)
  const copdRisk = calculateCOPDRisk(data);
  predictions.push(copdRisk);
  overallHealthScore -= copdRisk.riskScore * 0.25;
  
  // Ensure overall health score is between 0-100
  overallHealthScore = Math.max(0, Math.min(100, overallHealthScore));
  
  return {
    patientId: `P${Math.floor(Math.random() * 100000)}`,
    timestamp: new Date().toISOString(),
    patientData: data,
    predictions: predictions,
    overallHealthScore: overallHealthScore
  };
};

const calculateDiabetesRisk = (data: PatientData, bmi: number): DiseaseRisk => {
  let riskScore = 0;
  const contributingFactors = [];
  
  // Age factor
  if (data.age > 45) {
    riskScore += 15;
    contributingFactors.push({
      factor: 'Age',
      importance: 0.7,
      description: 'Risk increases with age, particularly after 45 years.'
    });
  }
  
  // BMI factor
  if (bmi >= 30) {
    riskScore += 20;
    contributingFactors.push({
      factor: 'BMI',
      importance: 0.8,
      description: 'Obesity significantly increases diabetes risk.'
    });
  } else if (bmi >= 25) {
    riskScore += 10;
    contributingFactors.push({
      factor: 'BMI',
      importance: 0.6,
      description: 'Being overweight increases diabetes risk.'
    });
  }
  
  // Blood sugar factor
  if (data.bloodSugar > 125) {
    riskScore += 25;
    contributingFactors.push({
      factor: 'Blood Sugar',
      importance: 0.9,
      description: 'Elevated blood glucose levels are a strong indicator of diabetes risk.'
    });
  } else if (data.bloodSugar > 100) {
    riskScore += 15;
    contributingFactors.push({
      factor: 'Blood Sugar',
      importance: 0.7,
      description: 'Slightly elevated blood glucose levels indicate potential prediabetes.'
    });
  }
  
  // Physical activity factor
  if (data.physicalActivity === 'sedentary') {
    riskScore += 15;
    contributingFactors.push({
      factor: 'Physical Activity',
      importance: 0.6,
      description: 'Lack of regular physical activity increases diabetes risk.'
    });
  }
  
  // Family history
  if (data.familyHistory.includes('diabetes')) {
    riskScore += 15;
    contributingFactors.push({
      factor: 'Family History',
      importance: 0.7,
      description: 'Having relatives with diabetes increases your risk.'
    });
  }
  
  // Limit risk score to 100
  riskScore = Math.min(100, riskScore);
  
  // Determine risk level
  let riskLevel: 'low' | 'moderate' | 'high' | 'very-high' = 'low';
  if (riskScore >= 75) riskLevel = 'very-high';
  else if (riskScore >= 50) riskLevel = 'high';
  else if (riskScore >= 25) riskLevel = 'moderate';
  
  // Generate recommendations
  const recommendations = [
    'Maintain a healthy weight',
    'Engage in regular physical activity',
    'Eat a balanced diet rich in fruits, vegetables, and whole grains',
    'Limit sugar and refined carbohydrates',
    'Get regular check-ups to monitor blood sugar levels'
  ];
  
  return {
    diseaseName: 'Type 2 Diabetes',
    riskScore,
    probability: riskScore / 100,
    riskLevel,
    contributingFactors,
    recommendations
  };
};

const calculateHeartDiseaseRisk = (data: PatientData, bmi: number): DiseaseRisk => {
  let riskScore = 0;
  const contributingFactors = [];
  
  // Age factor
  if (data.age > 65) {
    riskScore += 20;
    contributingFactors.push({
      factor: 'Age',
      importance: 0.8,
      description: 'Risk increases significantly with age, particularly after 65 years.'
    });
  } else if (data.age > 45) {
    riskScore += 10;
    contributingFactors.push({
      factor: 'Age',
      importance: 0.6,
      description: 'Middle age is associated with increased heart disease risk.'
    });
  }
  
  // Blood pressure factor
  if (data.bloodPressureSystolic >= 140 || data.bloodPressureDiastolic >= 90) {
    riskScore += 20;
    contributingFactors.push({
      factor: 'Blood Pressure',
      importance: 0.9,
      description: 'Hypertension is a major risk factor for heart disease.'
    });
  } else if (data.bloodPressureSystolic >= 130 || data.bloodPressureDiastolic >= 80) {
    riskScore += 10;
    contributingFactors.push({
      factor: 'Blood Pressure',
      importance: 0.7,
      description: 'Elevated blood pressure increases heart disease risk.'
    });
  }
  
  // Cholesterol factor
  if (data.cholesterolLevel > 240) {
    riskScore += 20;
    contributingFactors.push({
      factor: 'Cholesterol',
      importance: 0.8,
      description: 'High cholesterol levels significantly increase heart disease risk.'
    });
  } else if (data.cholesterolLevel > 200) {
    riskScore += 10;
    contributingFactors.push({
      factor: 'Cholesterol',
      importance: 0.6,
      description: 'Borderline high cholesterol increases heart disease risk.'
    });
  }
  
  // Smoking factor
  if (data.smokingStatus === 'current') {
    riskScore += 20;
    contributingFactors.push({
      factor: 'Smoking',
      importance: 0.9,
      description: 'Smoking significantly increases heart disease risk.'
    });
  } else if (data.smokingStatus === 'former') {
    riskScore += 5;
    contributingFactors.push({
      factor: 'Smoking History',
      importance: 0.3,
      description: 'Previous smoking history slightly increases heart disease risk.'
    });
  }
  
  // BMI factor
  if (bmi >= 30) {
    riskScore += 15;
    contributingFactors.push({
      factor: 'BMI',
      importance: 0.7,
      description: 'Obesity increases heart disease risk.'
    });
  }
  
  // Limit risk score to 100
  riskScore = Math.min(100, riskScore);
  
  // Determine risk level
  let riskLevel: 'low' | 'moderate' | 'high' | 'very-high' = 'low';
  if (riskScore >= 75) riskLevel = 'very-high';
  else if (riskScore >= 50) riskLevel = 'high';
  else if (riskScore >= 25) riskLevel = 'moderate';
  
  // Generate recommendations
  const recommendations = [
    'Maintain a healthy blood pressure',
    'Keep cholesterol levels in check',
    'Quit smoking and avoid secondhand smoke',
    'Engage in regular physical activity',
    'Eat a heart-healthy diet low in saturated fat and sodium',
    'Manage stress through healthy coping mechanisms'
  ];
  
  return {
    diseaseName: 'Coronary Heart Disease',
    riskScore,
    probability: riskScore / 100,
    riskLevel,
    contributingFactors,
    recommendations
  };
};

const calculateStrokeRisk = (data: PatientData): DiseaseRisk => {
  let riskScore = 0;
  const contributingFactors = [];
  
  // Age factor
  if (data.age > 65) {
    riskScore += 25;
    contributingFactors.push({
      factor: 'Age',
      importance: 0.9,
      description: 'Advanced age is a significant risk factor for stroke.'
    });
  } else if (data.age > 55) {
    riskScore += 15;
    contributingFactors.push({
      factor: 'Age',
      importance: 0.7,
      description: 'Risk of stroke increases with age, particularly after 55.'
    });
  }
  
  // Blood pressure factor
  if (data.bloodPressureSystolic >= 140 || data.bloodPressureDiastolic >= 90) {
    riskScore += 25;
    contributingFactors.push({
      factor: 'Blood Pressure',
      importance: 0.9,
      description: 'Hypertension is one of the most significant risk factors for stroke.'
    });
  }
  
  // Smoking factor
  if (data.smokingStatus === 'current') {
    riskScore += 20;
    contributingFactors.push({
      factor: 'Smoking',
      importance: 0.8,
      description: 'Smoking damages blood vessels and increases stroke risk.'
    });
  }
  
  // Alcohol consumption
  if (data.alcoholConsumption === 'heavy') {
    riskScore += 15;
    contributingFactors.push({
      factor: 'Alcohol Consumption',
      importance: 0.7,
      description: 'Heavy alcohol consumption increases stroke risk.'
    });
  }
  
  // Physical activity
  if (data.physicalActivity === 'sedentary') {
    riskScore += 10;
    contributingFactors.push({
      factor: 'Physical Activity',
      importance: 0.6,
      description: 'Lack of physical activity increases stroke risk.'
    });
  }
  
  // Limit risk score to 100
  riskScore = Math.min(100, riskScore);
  
  // Determine risk level
  let riskLevel: 'low' | 'moderate' | 'high' | 'very-high' = 'low';
  if (riskScore >= 75) riskLevel = 'very-high';
  else if (riskScore >= 50) riskLevel = 'high';
  else if (riskScore >= 25) riskLevel = 'moderate';
  
  // Generate recommendations
  const recommendations = [
    'Control blood pressure through medication and lifestyle changes',
    'Quit smoking',
    'Limit alcohol consumption',
    'Engage in regular physical activity',
    'Maintain a healthy diet low in sodium and saturated fat',
    'Monitor and control diabetes if present'
  ];
  
  return {
    diseaseName: 'Stroke',
    riskScore,
    probability: riskScore / 100,
    riskLevel,
    contributingFactors,
    recommendations
  };
};

const calculateCOPDRisk = (data: PatientData): DiseaseRisk => {
  let riskScore = 0;
  const contributingFactors = [];
  
  // Smoking factor (primary risk)
  if (data.smokingStatus === 'current') {
    riskScore += 40;
    contributingFactors.push({
      factor: 'Smoking',
      importance: 0.9,
      description: 'Smoking is the primary cause of COPD.'
    });
  } else if (data.smokingStatus === 'former') {
    riskScore += 20;
    contributingFactors.push({
      factor: 'Smoking History',
      importance: 0.7,
      description: 'Previous smoking history increases COPD risk.'
    });
  }
  
  // Age factor
  if (data.age > 65) {
    riskScore += 15;
    contributingFactors.push({
      factor: 'Age',
      importance: 0.6,
      description: 'COPD risk increases with age, particularly after 65.'
    });
  } else if (data.age > 40) {
    riskScore += 5;
    contributingFactors.push({
      factor: 'Age',
      importance: 0.3,
      description: 'COPD symptoms often begin to appear after age 40.'
    });
  }
  
  // Respiratory symptoms
  const respiratorySymptoms = ['shortness of breath', 'chronic cough', 'wheezing', 'chest tightness'];
  let symptomCount = 0;
  
  for (const symptom of respiratorySymptoms) {
    if (data.symptoms.some(s => s.toLowerCase().includes(symptom))) {
      symptomCount++;
    }
  }
  
  if (symptomCount >= 3) {
    riskScore += 30;
    contributingFactors.push({
      factor: 'Respiratory Symptoms',
      importance: 0.8,
      description: 'Multiple respiratory symptoms indicate potential COPD.'
    });
  } else if (symptomCount >= 1) {
    riskScore += 15;
    contributingFactors.push({
      factor: 'Respiratory Symptoms',
      importance: 0.6,
      description: 'Presence of respiratory symptoms may indicate potential COPD.'
    });
  }
  
  // Limit risk score to 100
  riskScore = Math.min(100, riskScore);
  
  // Determine risk level
  let riskLevel: 'low' | 'moderate' | 'high' | 'very-high' = 'low';
  if (riskScore >= 75) riskLevel = 'very-high';
  else if (riskScore >= 50) riskLevel = 'high';
  else if (riskScore >= 25) riskLevel = 'moderate';
  
  // Generate recommendations
  const recommendations = [
    'Quit smoking immediately',
    'Avoid secondhand smoke and air pollutants',
    'Get vaccinated against flu and pneumonia',
    'Use respiratory medications as prescribed',
    'Participate in pulmonary rehabilitation if appropriate',
    'Practice breathing exercises'
  ];
  
  return {
    diseaseName: 'Chronic Obstructive Pulmonary Disease (COPD)',
    riskScore,
    probability: riskScore / 100,
    riskLevel,
    contributingFactors,
    recommendations
  };
};

// Mock symptoms for the application
export const symptomsList = [
  'Fatigue',
  'Headache',
  'Fever',
  'Shortness of breath',
  'Chronic cough',
  'Chest pain',
  'Dizziness',
  'Nausea',
  'Vomiting',
  'Abdominal pain',
  'Joint pain',
  'Muscle aches',
  'Back pain',
  'Neck pain',
  'Blurred vision',
  'Difficulty sleeping',
  'Loss of appetite',
  'Weight loss',
  'Weight gain',
  'Increased thirst',
  'Frequent urination',
  'Wheezing',
  'Chest tightness',
  'Swelling in extremities',
  'Rash',
  'Sore throat',
  'Runny nose',
  'Dry mouth',
  'Memory problems',
  'Confusion'
];

// Mock family history conditions
export const familyHistoryConditions = [
  'diabetes',
  'heart disease',
  'stroke',
  'cancer',
  'hypertension',
  'copd',
  'asthma',
  'kidney disease',
  'alzheimer\'s',
  'parkinson\'s'
];