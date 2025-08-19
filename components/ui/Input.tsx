import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, required = false, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (required && !event.target.value) {
      setError(${label} is required);
    } else {
      setError(null);
    }
  };

  return (
    <div className="flex flex-col mb-6">
      <label className={text-orange-600 font-semibold mb-2 ${isFocused ? 'text-orange-700' : ''}}>
        {label}
      </label>
      <motion.input
        type={type}
        placeholder={placeholder}
        className={p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 ${error ? 'border-red-500' : 'border-gray-300'} bg-white}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          handleBlur(e);
        }}
        onChange={(e) => {
          onChange(e.target.value);
          if (error) setError(null); // Clear error on change
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-invalid={!!error}
        aria-describedby={${label}-error}
      />
      {error && <span id={${label}-error} className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;