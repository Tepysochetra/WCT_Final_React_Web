export default function Sidebar({ isOpen, onClose, setPage }) {
  return (
    <div className={`fixed top-0 bottom-0 h-screen w-[220px] bg-red-600 z-50 text-left p-8 transition-all duration-500 ease-in-out md:hidden flex flex-col justify-start ${
      isOpen ? 'right-0 shadow-2xl' : '-right-[220px]'
    }`}>
      
      {/* Native Cross Icon constructed out of CSS Lines */}
      <button 
        onClick={onClose}
        className="relative w-6 h-6 bg-transparent border-none cursor-pointer self-end mt-4 mb-6 focus:outline-none"
      >
        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-white rounded rotate-45 block" />
        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-white rounded -rotate-45 block" />
      </button>

      <ul className="flex flex-col space-y-6 mt-2 w-full p-0">
        {[
          { label: 'HOME', value: 'home' },
          { label: 'ABOUT', value: 'about' },
          { label: 'COURSE', value: 'course' },
          { label: 'BLOG', value: 'blog' },
          { label: 'CONTACT', value: 'contact' },
          { label: 'ADMIN', value: 'admin' }
        ].map((item) => (
          <li key={item.value} className="list-none w-full">
            <button 
              onClick={() => { setPage(item.value); onClose(); }} 
              className="w-full text-left bg-transparent border-none text-white text-[15px] tracking-wider font-medium block py-2 hover:text-red-200 cursor-pointer transition-colors border-b border-white/10"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
