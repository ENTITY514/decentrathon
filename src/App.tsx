import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import { Nav } from './Components/Nav/nav';
import { Dashboard } from './Pages/Dashboard/dashboard';
import { Explorer } from './Pages/Explorer/explorer';
import { Provider } from './Pages/Providers/provider';
import { Error } from './Pages/Error/error';
import { Statistics } from './Pages/Statistics/statistics';

export const App = () => {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Nav />
        <div className={style.box}>
          <Routes>
            <Route path={""} element={<Dashboard />} />
            <Route path={"explorer"} element={<Explorer />} />
            <Route path={"provider"} element={<Provider />} />
            <Route path={"statistics"} element={<Statistics />} />
            <Route path={"error"} element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
