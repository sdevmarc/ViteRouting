import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./containers/Home'));
const Header = lazy(() => import('./components/Header'));
const Register = lazy(() => import('./containers/Register'));

function App() {
  let showNav = window.location.pathname === '/';
  return (
    <div className="App">
      {showNav && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Register} />
      </Suspense>
    </div>
  );
}

export default App
