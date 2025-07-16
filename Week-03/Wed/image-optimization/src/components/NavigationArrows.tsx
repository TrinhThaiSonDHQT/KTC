'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationArrows = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentSlide(currentSlide + 1)}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NavigationArrows;
