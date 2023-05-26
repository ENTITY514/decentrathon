import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';

export const App = () => {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
