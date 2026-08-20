export default function Footer() {
  return (
    <footer className="w-full text-center py-8 bg-gray-50 border-t border-gray-200 mt-auto">
      <h4 className="text-xl font-semibold text-gray-800 mb-2">About Us</h4>
      <p className="text-gray-400 text-sm font-light max-w-md mx-auto mb-4">Royal University of Phnom Penh (RUPP) ITE Gen11 final platform framework.</p>
      <div className="flex justify-center space-x-6 text-xl text-red-500 mb-4">
        <a href="#" className="hover:text-red-700 transition-colors"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="hover:text-red-700 transition-colors"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" className="hover:text-red-700 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <p className="text-xs text-gray-400">Made by <i className="fa-solid fa-heart text-red-500 animate-pulse"></i> Kosal Tepysochetra (Year2).</p>
    </footer>
  );
}
