'use client'

import  { useState, useEffect } from 'react';

const ColorPicker: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState('#7C3AED');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--judbr-main', primaryColor);
  }, [primaryColor]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-white p-10 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bottom-12 right-0 bg-white p-10 rounded-lg shadow-xl">
          <label className="block text-sm font-medium text-gray-700 mb-2">
                Escolha a cor principal
          </label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-full h-10 border-none cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;