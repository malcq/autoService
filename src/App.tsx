import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Counter } from './components/Counter';
import { Link } from 'react-router-dom';

import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';

import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>

      <Counter />
    </div>
  );
};

export default App;