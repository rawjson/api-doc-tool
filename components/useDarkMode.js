import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = localStorage.getItem('theme');
    if (checkTheme) {
      checkTheme === 'dark' ? setDarkMode(true) : null;
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    if (!darkMode) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
