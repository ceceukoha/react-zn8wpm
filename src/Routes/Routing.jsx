import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Female, Home, Male, NoPage } from '../components';
import ErrorBoundary from '../components/ErrorBoundary';
const LazyUsers = lazy(() => import('../components/Users'));

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/users"
          element={
            <ErrorBoundary>
              <Suspense fallback="Loading...">
                <LazyUsers />
              </Suspense>
            </ErrorBoundary>
          }
        >
          <Route path="female" element={<Female />} />
          <Route path="male" element={<Male />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default Routing;
