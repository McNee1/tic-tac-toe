import { useEffect, useState } from 'react';

import { Toggle } from '../toggle/Toggle';

export const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Toggle
      checked={isDarkMode}
      onChange={(e) => {
        setIsDarkMode(e.target.checked);
      }}
      text='Dark mode'
    />
  );
};
