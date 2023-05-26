import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import { Nav } from './Components/Nav/nav';
import { Dashboard } from './Pages/Dashboard/dashboard';

export const App = () => {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Nav />
        <div className={style.box}>
          <Routes>
            <Route path={""} element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
