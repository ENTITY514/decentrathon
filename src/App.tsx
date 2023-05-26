import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import { Nav } from './Components/Nav/nav';
import { Dashboard } from './Pages/Dashboard/dashboard';
import { Explorer } from './Pages/Explorer/explorer';

export const App = () => {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Nav />
        <div className={style.box}>
          <Routes>
            <Route path={""} element={<Dashboard />} />
            <Route path={"explorer"} element={<Explorer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
