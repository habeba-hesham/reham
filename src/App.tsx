import { useState } from 'react';
import StartScreen from './components/PasswordScreen'; // نفس الملف بس غيرنا الفكرة
import MainPage from './components/MainPage';

export default function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <MainPage />
  ) : (
    <StartScreen onStart={() => setStarted(true)} />
  );
}