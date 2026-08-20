export default function HomePage() {
  const degrees = [
    { title: "Associate Degree", desc: '"A 2-year practical framework providing core technical foundation skills. Perfect for fast-track careers in industry fields or transitioning directly into further undergraduate studies."' },
    { title: "Bachelor's Degree", desc: '"A rigorous 4-year undergraduate program combining theoretical knowledge, laboratory research, and practical internships across science, humanities, and engineering faculties."' },
    { title: "Postgraduate Programs", desc: '"Advanced Master\'s and Ph.D. research degrees focusing on academic specialization, field innovations, global publication, and institutional development."' }
  ];

  // 🚀 FIX: Appended Vite's dynamic base URL prefix to your array string image paths
  const campusCards = [
    { name: "Auditorium Hall", img: `${import.meta.env.BASE_URL}images/Auditorium_Hall2.png` },
    { name: "Hun Sen Library", img: `${import.meta.env.BASE_URL}images/library2.png` },
    { name: "STEM Building", img: `${import.meta.env.BASE_URL}images/stem2.png` }
  ];

  return (
    <div className="w-full bg-white font-poppins antialiased">
      
      {/* 1. Hero Landing Cover Banner */}
      <section 
        className="min-h-screen w-full bg-cover bg-center relative flex flex-col justify-center text-center px-4"
        style={{ 
          /* 🚀 FIX: Modified the style block to string-inject the base path into your CSS background-image url */
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url('${import.meta.env.BASE_URL}images/Pages.jpg')` 
        }}
      >
        <div className="text-white max-w-4xl mx-auto z-10">
          <h1 className="text-[32px] md:text-[62px] font-semibold tracking-wide leading-tight mb-2">
            Oldest University in Cambodia
          </h1>
          <p className="text-[14px] font-light tracking-wide leading-relaxed mb-10 max-w-lg mx-auto">
            Making website for my final React project
          </p>
          <a 
            href="#courses" 
            className="inline-block text-white border border-white px-[34px] py-[12px] text-[13px] tracking-wide font-medium bg-transparent no-underline transition-all duration-1000 hover:bg-red-500 hover:border-red-500"
          >
            Visit Us To Know More
          </a>
        </div>
      </section>

      {/* 2. Courses Deck Section */}
      <section id="courses" className="w-[80%] mx-auto text-center py-20">
        <h1 className="text-[36px] font-semibold text-gray-800 mb-2">Courses We Offer</h1>
        <p className="text-gray-400 text-[14px] font-light max-w-2xl mx-auto mb-16 leading-relaxed">
          "Discover our comprehensive academic pathways designed to equip students with specialized knowledge, technical skills, and research capabilities for the evolving job market."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {degrees.map((deg, i) => (
            <div key={i} className="bg-[#fff3f3] border border-red-50/50 rounded-[10px] p-[20px] px-[12px] text-left transition-all duration-500 hover:shadow-xl hover:shadow-black/5">
              <h3 className="text-[18px] font-semibold text-gray-800 text-center mb-3">{deg.title}</h3>
              <p className="text-gray-500 text-[14px] font-light leading-relaxed p-[10px]">{deg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Upgraded Campus Section with Modern Animations */}
      <section className="w-[80%] mx-auto text-center pb-24">
        <h1 className="text-[36px] font-semibold text-gray-800 mb-2">Our Campus</h1>
        <p className="text-gray-400 text-[14px] font-light mb-12">Explore our state-of-the-art academic facilities and historical landmarks.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campusCards.map((card, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl relative overflow-hidden group shadow-md cursor-pointer aspect-square sm:aspect-video md:aspect-[4/5] bg-gray-900"
            >
              {/* Image: Zooms in smoothly when card is hovered */}
              <img 
                src={card.img} 
                alt={card.name} 
                className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-75" 
              />
              
              {/* Gradient overlay: Darkens the bottom area so text pops cleanly */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:from-red-950/80" />
              
              {/* Text Group: Hidden slightly below, glides upward and goes full bright on hover */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end text-center transform translate-y-2 transition-transform duration-500 ease-out group-hover:translate-y-0">
                <h3 className="text-white text-[22px] font-semibold tracking-wide shadow-sm mb-1">
                  {card.name}
                </h3>
                <p className="text-red-300 text-xs tracking-widest uppercase font-medium opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                  View Facility
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
