import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import { Nav } from './Components/Nav/nav';
import { Dashboard } from './Pages/Dashboard/dashboard';
import { Explorer } from './Pages/Explorer/explorer';
import { Provider } from './Pages/Providers/provider';
import { Error } from './Pages/Error/error';
import { Statistics } from './Pages/Statistics/statistics';
import { Blocks } from './Pages/Blocks/blocks';
import { BlockWrapper } from './Pages/Block/blocks'; import { AccountWrapper } from './Pages/AccountWrapper/account_wrapper';
import { Transactions } from './Pages/Transactions/transactions';
import { Transaction } from './Pages/Transaction/transaction';
;

export const App: React.FC = () => {

  return (
    <div className={style.app}>
      <BrowserRouter>
        <Nav />
        <div className={style.box}>
          <Routes>
            <Route path={""} element={<Dashboard />} />
            <Route path={"/explorer"} element={<Explorer />} />
            <Route path={"/provider/*"} element={<Provider />} />
            <Route path={"/statistics"} element={<Statistics />} />
            <Route path={"/transactions"} element={<Transactions />} />
            <Route path={"/transaction"} element={<Transaction />} />
            <Route path={"/blocks"} element={<Blocks />} />
            <Route path={"/block"} element={<BlockWrapper />} />
            <Route path={"/account"} element={<AccountWrapper />} />
            <Route path={"/error"} element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
