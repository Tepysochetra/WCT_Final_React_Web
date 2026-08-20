export default function Navbar({ onToggleSidebar, setPage, currentPage }) {
  const isHome = currentPage === 'home' || !currentPage;
  
  // Set the colors dynamically based on the active page view
  const textColorClass = isHome ? 'text-white' : 'text-gray-700';
  const hoverColorClass = isHome ? 'hover:text-red-200' : 'hover:text-red-500';

  return (
    <nav className={`flex px-[6%] py-4 justify-between items-center w-full z-40 font-poppins transition-all duration-300 ${
      isHome 
        ? 'bg-transparent absolute top-0 left-0 right-0' 
        : 'bg-white shadow-sm border-b border-gray-100 relative'
    }`}>
      
      {/* 1. RUPP Logo Branding Crest */}
      <div className="cursor-pointer flex items-center" onClick={() => setPage('home')}>
      <img 
        /* 🚀 FIX: Appended Vite's dynamic base URL prefix using curly braces and backticks */
        src={`${import.meta.env.BASE_URL}images/rupp_logo.png`} 
        alt="RUPP Logo" 
        className="w-[85px] md:w-[110px] h-auto object-contain transition-transform duration-300 hover:scale-105" 
      />
      </div>


      {/* 2. Desktop Links Row View */}
      <ul className="hidden md:flex space-x-9 items-center m-0 p-0">
        {[
          { label: 'HOME', value: 'home' },
          { label: 'ABOUT', value: 'about' },
          { label: 'COURSE', value: 'course' },
          { label: 'BLOG', value: 'blog' },
          { label: 'CONTACT', value: 'contact' },
          { label: 'ADMIN', value: 'admin' }
        ].map((item) => {
          const isActive = currentPage === item.value;
          return (
            <li key={item.value} className="relative group list-none inline-block">
              <button 
                onClick={() => setPage(item.value)} 
                className={`bg-transparent border-none text-[13px] tracking-widest font-semibold cursor-pointer uppercase transition-colors ${textColorClass} ${hoverColorClass} ${isActive ? 'text-red-500 font-bold' : ''}`}
              >
                {item.label}
              </button>
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-red-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </li>
          );
        })}
      </ul>

      {/* 3. Mobile Navigation Trigger Button */}
      <button 
        className="md:hidden flex flex-col justify-between w-6 h-4 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
        onClick={onToggleSidebar}
      >
        <span className={`w-full h-[3px] rounded transition-colors ${isHome ? 'bg-white' : 'bg-gray-700'}`} />
        <span className={`w-full h-[3px] rounded transition-colors ${isHome ? 'bg-white' : 'bg-gray-700'}`} />
        <span className={`w-full h-[3px] rounded transition-colors ${isHome ? 'bg-white' : 'bg-gray-700'}`} />
      </button>

    </nav>
  );
}
