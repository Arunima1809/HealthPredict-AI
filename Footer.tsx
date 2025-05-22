import React from 'react';
import { Activity, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Activity className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-semibold">HealthPredict AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering early disease detection through AI and data analytics for better health outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Disease Prediction</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Health Risk Assessment</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Personalized Health Plans</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Telemedicine Consultation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Health Monitoring</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Our Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Partnerships</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Press & Media</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">arunimarajput1809@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">+(91) 7781834248</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">Oriental Institute of Science and Technology</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2025 HealthPredict AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>
            Disclaimer: HealthPredict AI is not a substitute for professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider with any questions you may have 
            regarding a medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;