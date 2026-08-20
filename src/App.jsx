import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Views Matrix Imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AdminPortalPage from './pages/AdminPortalPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState('home'); // State handles fast client-side switching

  // Structural mapping engine
  const renderActiveView = () => {
    switch (page) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'course': return <CoursePage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      case 'admin': return <AdminPortalPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between antialiased">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} setPage={setPage} />
      <Navbar onToggleSidebar={() => setSidebarOpen(true)} setPage={setPage} currentPage={page} />
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
