'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Khôi phục theme từ localStorage khi trang tải
  useEffect(() => {
    const savedTheme = localStorage.getItem('notes-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Lưu theme vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem('notes-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
