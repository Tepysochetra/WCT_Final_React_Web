export default function CoursePage() {
  // Assigning your unique RUPP image assets to each specific card track!
  const facilitiesList = [
    { 
      title: "Hun Sen Library", 
      img: "/images/library.jpg",
      desc: "Information tracking core digital architectures, physical references, and student study pipelines."
    },
    { 
      title: "Digital Research Lab", 
      img: "/images/library2.png", // <-- Uses your library2.png asset smoothly!
      desc: "Equipped with advanced processing arrays and server grids to foster engineering model development."
    },
    { 
      title: "Global Study Center", 
      img: "/images/stem2.png", // <-- Uses your stem2.png asset smoothly!
      desc: "An international collaborative space hosting student exchanges, global seminars, and research forums."
    }
  ];

  return (
    <div className="w-full bg-white text-center pt-40 px-6 min-h-screen font-poppins antialiased">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Academic Offerings</h1>
      <p className="text-gray-400 text-sm font-light max-w-xl mx-auto mb-16">
        Comprehensive course descriptions detailing computing tracks and software infrastructure workflows.
      </p>
      
      {/* Facilities Infrastructure Grid Wrapper */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left pb-24">
        {facilitiesList.map((fac, idx) => (
          <div 
            key={idx} 
            className="rounded-[16px] bg-white overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col group"
          >
            {/* Image Container with hidden zoom overflow animations */}
            <div className="w-full h-48 overflow-hidden bg-gray-50">
              <img 
                src={fac.img} 
                alt={fac.title} 
                className="w-full h-full object-cover border-b border-gray-100 transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            
            {/* Description Text Cards Pad */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 text-[18px] mb-2 tracking-wide transition-colors group-hover:text-red-500">
                  {fac.title}
                </h3>
                <p className="text-gray-400 text-[13px] font-light leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
