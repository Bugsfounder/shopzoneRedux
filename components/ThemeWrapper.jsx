'use client';
import { useSelector } from 'react-redux';

export default function ThemeWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);
  
  return (
    <div className={`${mode === 'dark' ? 'dark' : ''} min-h-screen text-foreground bg-background transition-colors duration-300`}>
      {children}
    </div>
  );
}
