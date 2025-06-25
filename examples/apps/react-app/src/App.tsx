import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import './App.less';

declare global {
  interface Window {
    __POWERED_BY_WUJIE__?: boolean;
    __WUJIE_PUBLIC_PATH__?: string;
  }
}

const App: React.FC = () => {
  const elements = useRoutes(routes);
  return (
    <div className="App">
      <header className="App-header">{elements}</header>
    </div>
  );
};

export default App;
