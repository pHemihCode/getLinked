'use client'
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-5 h-5 border-4 border-color-2 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;