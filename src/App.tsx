import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

export default function App() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        setSettings(data);
      });
  }, []);

  useEffect(() => {
    if (settings) {
      if (settings.primaryColor) {
        document.documentElement.style.setProperty('--color-primary', settings.primaryColor);
      }
      if (settings.secondaryColor) {
        document.documentElement.style.setProperty('--color-secondary', settings.secondaryColor);
      }
      if (settings.fontFamily) {
        document.body.style.fontFamily = settings.fontFamily;
      }
      if (settings.siteName) {
        document.title = settings.siteName;
      }
      if (settings.siteDescription) {
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', 'description');
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', settings.siteDescription);
      }
    }
  }, [settings]);

  if (!settings) return null;

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-stone-800">
        <Navbar settings={settings} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home settings={settings} />} />
            <Route path="/admin" element={<Admin settings={settings} setSettings={setSettings} />} />
          </Routes>
        </main>
        <Footer settings={settings} />
      </div>
    </Router>
  );
}
