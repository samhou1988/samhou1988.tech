import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/404';

import Loading from './components/loading';
import Layout from './components/layout';

import { useAuth } from './hooks';

import { fakeAuthProvider } from './utils';
import { AuthContext } from './contexts/AuthContext';
import Login from './pages/Login';

const LazyPost = lazy(() => import('./pages/Post'));

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route
            path="/a/:id"
            element={
              <Suspense fallback={<Loading />}>
                <LazyPost />
              </Suspense>
            }
          />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = React.useState<any>(null);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
