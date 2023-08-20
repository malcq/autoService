import { Link } from 'react-router-dom';

import { useTheme } from '@/shared/lib/hooks/useTheme';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;