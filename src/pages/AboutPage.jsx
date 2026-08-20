export default function AboutPage() {
  return (
    <div className="w-full bg-white text-center min-h-screen font-poppins">
      
      {/* 1. Header Banner Section - Changed to 'py-16' so it grows naturally with your text! */}
      <section className="py-16 bg-gray-50 border-b border-gray-100 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-10">About Us</h1>
        <p className="text-gray-500 max-w-xl mx-auto font-light text-sm leading-relaxed">
          We are proud ITE Generation 11 students building standard web structures layout blocks at RUPP.
        </p>
      </section>
      
      {/* 2. Main Content Row Container */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-left flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column: Description Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">We are ITE student Gen11</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
            Our cohort specializes in computer systems design, database integrations, and constructing dynamic interactive applications using modern development environments.
          </p>
          <button className="px-6 py-3 bg-red-500 text-white font-medium text-xs rounded tracking-wider shadow-sm uppercase border-none hover:bg-red-600 transition-colors cursor-pointer">
            LEARN MORE
          </button>
        </div>
        
        {/* Right Column: Image Asset */}
        <div className="md:w-1/2 w-full">
          <img 
            src="/images/image.png" 
            alt="About us" 
            className="w-full h-auto rounded-xl shadow-md border border-gray-100 object-cover max-h-72 transition-transform duration-300 hover:scale-[1.01]"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.insertAdjacentHTML('afterend', '<div class="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-gray-200">Please verify image file spelling</div>');
            }}
          />
        </div>

      </div>
    </div>
  );
}
