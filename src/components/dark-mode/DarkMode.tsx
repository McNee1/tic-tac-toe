import { useEffect, useState } from 'react';

import { Toggle } from '../toggle/Toggle';

export const DarkMode = ({ className }: { className?: string }) => {
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
      className={className}
      onChange={(e) => {
        setIsDarkMode(e.target.checked);
      }}
      text='Dark mode'
    />
  );
};
