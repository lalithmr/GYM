import { useState, useEffect, useRef } from "react";
import avatarOne from "../images/avatar-one.svg";
import avatarTwo from "../images/avatar-two.svg";
import avatarThree from "../images/avatar-three.svg";

const testimonials = [
  {
    name: "Monica",
    avatar: avatarOne,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non Mattis Viverra Scelerisque At Commodo Augue. Pretium Pulvinar Dui Pharetra Justo.",
  },
  {
    name: "Monica",
    avatar: avatarTwo,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non Mattis Viverra Scelerisque At Commodo Augue. Pretium Pulvinar Dui Pharetra Justo.",
  },
  {
    name: "Monica",
    avatar: avatarThree,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non Mattis Viverra Scelerisque At Commodo Augue. Pretium Pulvinar Dui Pharetra Justo.",
  },
  {
    name: "Monica",
    avatar: avatarOne,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non Mattis Viverra Scelerisque At Commodo Augue. Pretium Pulvinar Dui Pharetra Justo.",
  },
];

const REAL_COUNT = testimonials.length;
const TOTAL_GROUPS = 7;
const displayTestimonials = Array(TOTAL_GROUPS).fill(testimonials).flat();
const START_INDEX = REAL_COUNT * 3;
const JUMP_FORWARD = REAL_COUNT * 5;
const JUMP_BACKWARD = REAL_COUNT * 1;

function DecorativeShapes({ isActive }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px] z-0">
      <div 
        className="absolute h-[294px] w-[294px] shrink-0 rounded-full bg-[#DCFB46] transition-all duration-300 ease-in-out" 
        style={{ left: '-153px', top: '-76px' }} 
      />
      <div 
        className="absolute h-[220px] w-[220px] shrink-0 rounded-full bg-[#DCFB46] transition-all duration-300 ease-in-out" 
        style={{ left: '-109px', top: '155px' }} 
      />
      <div 
        className="absolute h-[250px] w-[250px] shrink-0 rounded-full bg-[#DCFB46] transition-all duration-300 ease-in-out origin-center" 
        style={{ 
          left: '535px', 
          top: '-55px', 
          opacity: isActive ? 1 : 0, 
          transform: isActive ? 'scale(1)' : 'scale(0)' 
        }} 
      />
      <div 
        className="absolute h-[250px] w-[250px] shrink-0 rounded-full bg-[#DCFB46] transition-all duration-300 ease-in-out" 
        style={{ left: '455px', top: '117px' }} 
      />
    </div>
  );
}

function Card({ testimonial, isActive, onHover, internalRef }) {
  return (
    <article
      ref={internalRef}
      onMouseEnter={onHover}
      className={`relative flex flex-col md:flex-row items-center md:items-start shrink-0 rounded-[30px] border-2 border-black bg-[#BBBBBB] px-[24px] py-[30px] md:px-[30px] md:py-[40px] transition-all duration-500 ease-in-out font-['Poppins'] overflow-hidden cursor-pointer ${
        isActive
          ? "w-[85vw] md:w-[650px] h-auto md:h-[250px] opacity-100 md:scale-100 z-20 shadow-[0_15px_30px_rgba(0,0,0,0.1)] gap-[20px] md:gap-[28px]"
          : "w-[75vw] md:w-[528px] h-auto md:h-[203px] opacity-100 md:opacity-[0.75] scale-95 z-10 gap-[20px] md:gap-[22px]"
      }`}
    >
      <DecorativeShapes isActive={isActive} />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-full h-full">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={`shrink-0 rounded-full object-cover object-top transition-all duration-500 ${
            isActive ? 'h-[64px] w-[64px] md:h-[75px] md:w-[75px] border-[2.5px]' : 'h-[50px] w-[50px] md:h-[60px] md:w-[60px] border-[2px]'
          } border-black shadow-md mt-[2px]`}
        />

        <div className={`flex flex-col text-black h-full w-full ${isActive ? 'max-w-[440px]' : 'max-w-[360px]'} items-center md:items-start transition-all duration-500`}>
          <h3 className="text-[20px] md:text-[24px] font-semibold leading-none w-full text-center md:text-left">
            {testimonial.name}
          </h3>

          <p className="mt-[12px] md:mt-[16px] text-[16px] md:text-[20px] font-normal leading-[1.45] text-center w-full">
            {testimonial.text}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const [isHovered, setIsHovered] = useState(false);
  const cardRefs = useRef([]);
  const isTransitioning = useRef(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isHovered || !isInView) return;
    const interval = setInterval(() => {
      if (!isTransitioning.current) {
        setActiveIndex((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, isInView]);

  useEffect(() => {
    const activeCard = cardRefs.current[activeIndex];
    
    // Smooth scroll for both mobile and desktop tracking continuously via flex horizontal limits exclusively
    if (activeCard && containerRef.current && typeof window !== 'undefined') {
      const container = containerRef.current;
      container.style.scrollBehavior = "smooth";
      container.scrollLeft = activeCard.offsetLeft - container.clientWidth / 2 + activeCard.clientWidth / 2;
    }

    // Boundary intercept manipulation resetting viewport position silently to the exact off-screen mirror buffer
    if (activeIndex >= JUMP_FORWARD) {
      isTransitioning.current = true;
      setTimeout(() => {
        const targetIndex = activeIndex - (REAL_COUNT * 2);
        setActiveIndex(targetIndex);
        const targetCard = cardRefs.current[targetIndex];
        if (targetCard && containerRef.current) {
          const container = containerRef.current;
          container.style.scrollBehavior = "auto"; // Instant jump
          container.scrollLeft = targetCard.offsetLeft - container.clientWidth / 2 + targetCard.clientWidth / 2;
        }
        setTimeout(() => { isTransitioning.current = false; }, 50);
      }, 600);
    } else if (activeIndex <= JUMP_BACKWARD) {
      isTransitioning.current = true;
      setTimeout(() => {
        const targetIndex = activeIndex + (REAL_COUNT * 2);
        setActiveIndex(targetIndex);
        const targetCard = cardRefs.current[targetIndex];
        if (targetCard && containerRef.current) {
          const container = containerRef.current;
          container.style.scrollBehavior = "auto"; // Instant jump
          container.scrollLeft = targetCard.offsetLeft - container.clientWidth / 2 + targetCard.clientWidth / 2;
        }
        setTimeout(() => { isTransitioning.current = false; }, 50);
      }, 600);
    }
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="w-full bg-[#BBBBBB] py-[20px] md:py-[30px] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[134px] flex flex-col">
        
        {/* Header Section */}
        <div className="relative flex flex-col justify-center items-center w-full mb-[40px] md:mb-[60px]">
          <div className="text-center w-full relative z-10 flex flex-col items-center">
            <h2 className="text-[20px] font-bold font-['Poppins']">
              <span className="text-[#DCFB46]">Our </span>
              <span className="text-black">Testimonials</span>
            </h2>
            <p className="mt-[12px] w-full max-w-[632px] text-[16px] md:text-[18px] font-medium leading-[1.3] text-black">
              At This Part You Can Easily Access All Of Our Services. Take A Look At Them And Choose Which Ever You Want.
            </p>
          </div>
          
          {/* Controls */}
          <div className="absolute right-0 top-0 hidden md:flex items-center gap-[16px] z-20 h-[30px]">
            <button className="text-[20px] font-normal text-black font-['Poppins'] hover:opacity-70 transition-opacity border-b-[1px] border-black pb-[1px]">
              VIEW ALL
            </button>
            <div className="flex gap-[8px] ml-[8px]">
              <button 
                onClick={() => setActiveIndex((prev) => prev - 1)}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-[1.5px] border-black bg-transparent transition-all hover:bg-[#111111] group focus:outline-none"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#DCFB46" className="w-[18px] h-[18px] group-hover:scale-110 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveIndex((prev) => prev + 1)}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-[1.5px] border-black bg-transparent transition-all hover:bg-[#111111] group focus:outline-none"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#DCFB46" className="w-[18px] h-[18px] group-hover:scale-110 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Endless Horizontal Carousel Track */}
        <div 
          ref={containerRef}
          className="w-full flex overflow-x-auto flex-row gap-[24px] pb-[40px] pt-[20px] items-center md:items-center justify-start hide-scrollbar relative z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {displayTestimonials.map((testimonial, idx) => (
            <Card 
              key={idx} 
              testimonial={testimonial} 
              isActive={(idx % REAL_COUNT) === (activeIndex % REAL_COUNT)} 
              onHover={() => setActiveIndex(idx)} 
              internalRef={(el) => (cardRefs.current[idx] = el)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
