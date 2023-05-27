import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import { Nav } from './Components/Nav/nav';
import { Dashboard } from './Pages/Dashboard/dashboard';
import { Explorer } from './Pages/Explorer/explorer';
import { Provider } from './Pages/Providers/provider';
import { Error } from './Pages/Error/error';
import { Statistics } from './Pages/Statistics/statistics';
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import { Blocks } from './Pages/Blocks/blocks';
import { Block } from './Pages/Block/blocks';
import { ProvidersApi } from './services/project_api';

export const App = () => {
  const beamsClient = new PusherPushNotifications.Client({
    instanceId: "2d2fd629-0157-4b64-a648-96ea1d631e52",
  });

  beamsClient.start().then(() => {
  });
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
            <Route path={"/blocks"} element={<Blocks />} />
            <Route path={"/block"} element={<Block />} />
            <Route path={"/error"} element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
