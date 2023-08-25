import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const redirectTo = (path: string) => render(
  <BrowserRouter>
    <Routes>
      <Route path={path} element={<div></div>} />
      <Route path={'*'} element={<Navigate to={path} />} />
    </Routes>
  </BrowserRouter>
);
