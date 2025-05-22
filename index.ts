export interface PatientData {
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number; // in cm
  weight: number; // in kg
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  cholesterolLevel: number;
  bloodSugar: number;
  smokingStatus: 'never' | 'former' | 'current';
  alcoholConsumption: 'none' | 'moderate' | 'heavy';
  physicalActivity: 'sedentary' | 'moderate' | 'active';
  familyHistory: string[];
  symptoms: string[];
}

export interface DiseaseRisk {
  diseaseName: string;
  riskScore: number; // 0-100
  probability: number; // 0-1
  riskLevel: 'low' | 'moderate' | 'high' | 'very-high';
  contributingFactors: Array<{
    factor: string;
    importance: number; // 0-1
    description: string;
  }>;
  recommendations: string[];
}

export interface PredictionResult {
  patientId: string;
  timestamp: string;
  patientData: PatientData;
  predictions: DiseaseRisk[];
  overallHealthScore: number; // 0-100
}