import React from "react";
import heroModel from "../images/fitness-woman.svg";
import foodImage from "../images/diet-orbit.svg";
const stats = [
  { value: "23K+", label: ["Active", "Members"] },
  { value: "103K+", label: ["Community", "Members"] },
  { value: "103K+", label: ["Svastha", "Members"] },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#BBBBBB] font-['Poppins'] overflow-hidden">
      {/* Background text "NO PAIN NO GAIN" */}
      <div className="absolute left-0 right-0 top-[140px] flex justify-center pointer-events-none z-0 select-none">
        <h1 className="bg-[linear-gradient(90deg,#000000_0%,#6E7E23_39%,#DCFB46_69%,#000000_99%)] bg-clip-text text-center text-[80px] md:text-[110px] lg:text-[145px] font-bold leading-[1.1] lg:leading-none tracking-[0.01em] text-transparent whitespace-normal lg:whitespace-nowrap px-4 lg:px-0">
          NO PAIN <br className="block lg:hidden" /> NO GAIN
        </h1>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-10 pt-[320px] md:pt-[380px] lg:pt-[220px] xl:pt-[210px] pb-[20px] lg:pb-[30px] flex flex-col items-center">

        {/* Main Layout Grid */}
        <div className="flex flex-col xl:grid xl:grid-cols-[1fr_minmax(450px,580px)_1fr] lg:grid lg:grid-cols-[1fr_minmax(320px,460px)_1fr] w-full items-end gap-x-0 lg:gap-x-4 xl:gap-x-0 relative z-20">
          
          {/* Mobile Wrapper for Side-by-Side Content */}
          <div className="order-2 lg:contents flex flex-row items-center justify-between sm:justify-around w-full gap-4 mt-8 lg:mt-0 px-2 lg:px-0 z-20">
            
            {/* Left Content (Row 1, Col 1) */}
            <div className="flex flex-col items-start lg:items-start text-left lg:text-left z-20 pb-0 lg:pb-12 xl:pb-12 min-w-0 lg:col-start-1 lg:row-start-1 lg:pt-[200px] xl:pt-[240px] self-start">
              <h2 className="text-[clamp(24px,3.5vw,52px)] md:text-[clamp(28px,3.5vw,52px)] font-semibold leading-[1.1] lg:leading-[1.2] xl:leading-[60px] text-black">
                <div className="tracking-tight">PERSONAL</div>
                <div className="tracking-tight">TRAINING</div>
                <div className="tracking-tight">WITH</div>
                <div className="text-[#DCFB46] tracking-tight drop-shadow-sm">ROSSI</div>
              </h2>
              <button
                type="button"
                className="mt-6 lg:mt-8 flex px-4 md:px-5 lg:px-6 py-2 items-center justify-center rounded-[30px] border-[2px] border-[#DCFB46] text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-none text-black transition-all duration-300 hover:bg-[#DCFB46] hover:shadow-lg whitespace-nowrap"
              >
                Join for free
              </button>
            </div>

            {/* Right Content - Mobile (Row 1, Col 2 on Mobile) */}
            <div className="flex lg:hidden flex-col items-center text-center z-20 pb-0 pt-0 opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]">
              <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] flex-shrink-0 border-4 border-[#DCFB46]/20 transition-transform duration-500 hover:scale-105">
                <img src={foodImage} alt="Expert diet bowl" className="h-full w-full object-cover" />
              </div>
              <svg aria-hidden="true" viewBox="0 0 12 70" className="mt-2 h-[40px] md:h-[50px] w-auto">
                <path d="M6 68V8" fill="none" stroke="#DCFB46" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 0L10 8H2L6 0Z" fill="#DCFB46" />
              </svg>
              <p className="mt-2 text-[13px] md:text-[16px] font-medium leading-[1.4] tracking-wide text-black max-w-[140px] sm:max-w-[180px]">
                Join and Get Our <br /> Expert Diet
              </p>
            </div>

          </div>

          {/* Right Content - Desktop (Unified Bowl, Arrow & Text) */}
          <div className="hidden lg:flex order-none lg:col-start-3 lg:row-start-1 flex-col items-center justify-start text-center w-full z-20 pt-0 lg:pt-[200px] xl:pt-[240px] px-2 opacity-0 animate-[fadeIn_1.2s_ease-out_forwards] self-start">
            
            {/* Diet Bowl Image */}
            <div className="w-[220px] h-[220px] rounded-full overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] flex-shrink-0 border-4 border-[#DCFB46]/20 transition-transform duration-500 hover:scale-105">
              <img src={foodImage} alt="Expert diet bowl" className="h-full w-full object-cover" />
            </div>

            {/* UP Arrow */}
            <svg aria-hidden="true" viewBox="0 0 12 70" className="mt-2 h-[clamp(50px,5vw,70px)] w-auto">
              <path d="M6 68V8" fill="none" stroke="#DCFB46" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6 0L10 8H2L6 0Z" fill="#DCFB46" />
            </svg>

            {/* Action Text */}
            <p className="mt-2 text-[clamp(12px,1.2vw,16px)] font-medium leading-[1.4] tracking-wide text-black max-w-[200px]">
              Join and Get Our <br /> Expert Diet
            </p>

          </div>

          {/* Grey Box (Row 2, Col 2) */}
          <div className="order-4 lg:order-none lg:col-start-2 lg:row-start-2 bg-[#BBBBBB]/[0.55] pt-12 pb-10 px-4 xl:px-6 min-w-0 w-full relative z-50 mt-8 lg:mt-0 flex flex-col justify-center">
            <p className="text-[clamp(16px,1.8vw,24px)] font-medium leading-[1.3] text-black text-center mb-8 xl:mb-10 max-w-[500px] mx-auto">
              Join our community and be the best <br className="hidden lg:block"/> form of your life
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#DCFB46]">
              {stats.map((stat, i) => (
                <div
                  key={stat.value + stat.label[0]}
                  className="flex flex-col items-center py-4 md:py-0 px-2 xl:px-4 flex-1 w-full md:w-auto opacity-0 animate-[fadeIn_1.5s_ease-out_forwards] min-w-0"
                  style={{ animationDelay: (i * 0.2) + "s" }}
                >
                  <div className="text-[clamp(20px,2.0vw,28px)] font-bold leading-none text-[#DCFB46] mb-2 drop-shadow-sm">
                    {stat.value}
                  </div>
                  <div className="text-[clamp(12px,1vw,14px)] font-bold leading-[1.2] text-black text-center flex flex-col">
                    <span>{stat.label[0]}</span>
                    <span>{stat.label[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer Image (Row 1-2, Col 2) */}
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center items-end relative z-30 pointer-events-none mt-10 lg:mt-0 w-full h-full lg:mb-[15px] min-w-0">
            <img
              src={heroModel}
              alt="Trainer Rossi"
              className="max-w-[320px] md:max-w-[380px] xl:max-w-[450px] w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-105 pointer-events-auto"
            />
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
