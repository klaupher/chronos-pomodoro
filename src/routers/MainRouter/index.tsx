import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AboutPage } from '../../pages/About';
import { HomePage } from '../../pages/Home';
import { NotFoundPage } from '../../pages/NotFound';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-pomodoro' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
