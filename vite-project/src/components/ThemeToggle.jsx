import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      style={{
        background: 'none',
        border: '1px solid #ccc',
        padding: '0.4rem 0.8rem',
        borderRadius: '6px',
        cursor: 'pointer',
        color: darkMode ? '#fce4ec' : '#333',
      }}
    >
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
