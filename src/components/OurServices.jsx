import React from "react";
import serviceSalad from "../images/service-salad.svg";
import serviceZumba from "../images/service-zumba.svg";
import serviceYoga from "../images/service-yoga.svg";
import serviceTraining from "../images/service-training.svg";

const services = [
  {
    title: ["Fresh Salad", "Recipes"],
    description: "Checkout The Fresh Salad Recipes With Veg & Non-Veg Options",
    image: serviceSalad,
    textWidth: "97px",
    imgClass: "w-[206px] h-[309px]", 
  },
  {
    title: ["Online Zumba", "Live Classes"],
    description: "Feel The Music And Find Your Groove With Our Expert Teacher's Team.",
    image: serviceZumba,
    textWidth: "100px",
    imgClass: "w-[239px] h-[359px]", 
  },
  {
    title: ["Live YOGA", "Classes"],
    description: "I Help People Find Inner Peace With YOGIC Practices From Multiple Cultures",
    image: serviceYoga,
    textWidth: "100px",
    imgClass: "w-[218px] h-[327px]", 
  },
  {
    title: ["Personal", "Training Plans"],
    description: "Personal Training Plans Tailored To Your Specific Needs",
    image: serviceTraining,
    textWidth: "112px",
    imgClass: "w-[180px] h-[270px]", 
  },
];

function ServiceCard({ service, index }) {
  return (
    <article 
      className="group relative w-full max-w-[294px] sm:w-[294px] h-[313px] bg-[#BBBBBB] border-[1.5px] border-[#DCFB46]/50 hover:border-[#DCFB46] hover:bg-[#C2C2C2] rounded-[24px] p-[24px] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.25)] opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] mx-auto overflow-hidden shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)] cursor-pointer"
      style={{ animationDelay: (index * 0.15) + "s" }}
    >
      {/* Text Content */}
      <div 
        className="relative z-10 flex flex-col justify-between text-left h-full transition-transform duration-500 ease-out group-hover:translate-x-1"
        style={{ width: service.textWidth, minWidth: service.textWidth, maxWidth: service.textWidth }}
      >
        <div className="flex flex-col mb-[10px]">
          <h3 className="text-[19px] font-bold leading-[1.2] text-black mb-[10px] tracking-tight drop-shadow-sm">
            {service.title.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h3>
          <p className="text-[12px] font-medium leading-[1.4] text-black/90">
            {service.description}
          </p>
        </div>
        
        <button className="flex w-fit items-center text-[12.5px] font-bold text-black transition-colors mt-auto">
          Learn More <span className="text-[#DCFB46] ml-[6px] text-[18px] leading-[0] mt-[1px] transition-transform duration-500 ease-out group-hover:translate-x-3 drop-shadow-sm">&rarr;</span>
        </button>
      </div>

      {/* 3D Parallax Image Rendering directly pushing limits on boundaries */}
      <div className="absolute -bottom-[20px] -right-[20px] z-0 pointer-events-none flex items-end justify-end transition-transform duration-500 ease-out group-hover:scale-[1.08] group-hover:-translate-y-2 group-hover:-translate-x-1">
        <img
          src={service.image}
          alt={service.title.join(" ")}
          className={`object-contain object-right-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)] w-auto max-w-none transition-filter duration-500 ease-out group-hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)] ${service.imgClass}`}
        />
      </div>
    </article>
  );
}

export default function OurServices() {
  return (
    <section className="w-full bg-[#BBBBBB] font-['Poppins'] py-[20px] lg:py-[30px] px-[24px] overflow-hidden text-center">
      <div className="mx-auto w-full max-w-[1440px] flex flex-col items-center">
        
        {/* Header Block precisely centered with smooth text rendering constraints */}
        <div className="text-center w-full max-w-[750px] mb-14">
          <h2 className="text-[20px] md:text-[24px] font-bold leading-[1.25] tracking-[-0.02em]">
            <span className="text-[#DCFB46]">Our </span>
            <span className="text-black">Services</span>
          </h2>
          <p className="mx-auto mt-4 text-[16px] font-medium leading-[1.5] tracking-tight text-black/90 max-w-[500px]">
            At This Part You Can Easily Access All Of Our Services. Take A Look At Them And Chose Wich Ever You Want.
          </p>
        </div>

        {/* Fluid Responsive Flex Grid */}
        <div className="flex flex-wrap gap-[24px] lg:gap-[32px] w-full justify-center">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
