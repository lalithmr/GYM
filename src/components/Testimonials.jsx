"use client";

import { useState, useEffect, useRef } from "react";
import avatarOne from "../images/avatar-one.svg";
import avatarTwo from "../images/avatar-two.svg";
import avatarThree from "../images/avatar-three.svg";

const testimonials = [
  {
    name: "Monica",
    avatar: avatarOne,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non Mattis Viverra Scelerisque At Commodo Augue.",
  },
  {
    name: "Monica",
    avatar: avatarTwo,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non Mattis Viverra Scelerisque At Commodo Augue.",
  },
  {
    name: "Monica",
    avatar: avatarThree,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non Mattis Viverra Scelerisque At Commodo Augue.",
  },
  {
    name: "Monica",
    avatar: avatarOne,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non Mattis Viverra Scelerisque At Commodo Augue.",
  },
];

const LOOP = 6;
const data = Array(LOOP).fill(testimonials).flat();

function Shapes({ active }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[30px] pointer-events-none">
      <div className="absolute w-[294px] h-[294px] bg-[#DCFB46] rounded-full"
        style={{ left: "-153px", top: active ? "76px" : "-76px" }} />
      <div className="absolute w-[220px] h-[220px] bg-[#DCFB46] rounded-full"
        style={{ left: "-109px", top: "155px" }} />
      {active && (
        <div className="absolute w-[250px] h-[250px] bg-[#DCFB46] rounded-full"
          style={{ left: "535px", top: "-55px" }} />
      )}
      <div className="absolute w-[250px] h-[250px] bg-[#DCFB46] rounded-full"
        style={{ left: "455px", top: "117px" }} />
    </div>
  );
}

function Card({ item, active, setHover, clearHover, refProp }) {
  return (
    <div
      ref={refProp}
      onMouseEnter={setHover}
      onMouseLeave={clearHover}
      className={`relative shrink-0 rounded-[30px] border-2 border-black bg-[#BBBBBB] px-[30px] py-[40px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${active
        ? "w-[650px] h-[250px] scale-100 opacity-100 z-20 shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
        : "w-[528px] h-[203px] scale-[0.85] opacity-50 blur-[1px] z-10"
        }`}
    >
      <Shapes active={active} />

      <div className="relative z-10 flex gap-[28px]">
        <img
          src={item.avatar}
          className={`${active ? "w-[75px] h-[75px]" : "w-[60px] h-[60px]"} rounded-full border border-black`}
        />

        <div className={`${active ? "max-w-[440px]" : "max-w-[360px]"}`}>
          <h3 className="text-[24px] font-semibold font-['Poppins']">{item.name}</h3>
          <p className="mt-[16px] text-[20px] font-['Poppins']">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef(null);
  const refs = useRef([]);

  const START_INDEX = Math.floor(data.length / 2);
  const [active, setActive] = useState(START_INDEX);
  const [hover, setHover] = useState(null);
  const [pause, setPause] = useState(false);

  // SET INITIAL POSITION (CENTER)
  useEffect(() => {
    const el = containerRef.current;
    const card = refs.current[START_INDEX];

    if (el && card) {
      el.scrollLeft =
        card.offsetLeft - el.clientWidth / 2 + card.clientWidth / 2;
    }
  }, []);

  // CONTINUOUS SCROLL WITH INFINITE LOOP
  useEffect(() => {
    if (pause) return;

    const el = containerRef.current;
    let frame;

    const scroll = () => {
      if (!el) return;

      el.scrollLeft += 0.5;

      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollLeft = el.scrollWidth / 2;
      }

      if (el.scrollLeft <= 5) {
        el.scrollLeft = el.scrollWidth / 2;
      }

      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [pause]);

  // CENTER DETECTION
  useEffect(() => {
    const el = containerRef.current;

    const detect = () => {
      const center = el.scrollLeft + el.clientWidth / 2;

      let closest = 0;
      let min = Infinity;

      refs.current.forEach((card, i) => {
        if (!card) return;

        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const dist = Math.abs(center - cardCenter);

        if (dist < min) {
          min = dist;
          closest = i;
        }
      });

      setActive(closest);
    };

    el.addEventListener("scroll", detect);
    return () => el.removeEventListener("scroll", detect);
  }, []);

  return (
    <section className="w-full bg-[#BBBBBB] py-[50px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[24px]">

        {/* HEADER */}
        <div className="relative flex justify-center mb-[60px]">

          <div className="text-center max-w-[700px]">
            <h2 className="text-[20px] font-bold font-['Poppins']">
              <span className="text-[#DCFB46]">Our </span>
              <span>Testimonials</span>
            </h2>

            <p className="mt-[12px] text-[20px] font-normal font-['Poppins']">
              At This Part You Can Easily Access All Of Our Services. Take A Look At Them And Choose Which Ever You Want.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="absolute right-0 flex items-center gap-[16px]">

            <button className="text-[20px] font-normal font-['Poppins'] border-b border-black hover:opacity-70">
              VIEW ALL
            </button>

            <div className="flex gap-[8px]">

              <button
                onClick={() =>
                  containerRef.current.scrollBy({ left: -650, behavior: "smooth" })
                }
                className="w-[36px] h-[36px] rounded-full border-2 border-black flex items-center justify-center hover:bg-black group transition"
              >
                <svg viewBox="0 0 24 24" stroke="#DCFB46" strokeWidth="2.5" fill="none">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={() =>
                  containerRef.current.scrollBy({ left: 650, behavior: "smooth" })
                }
                className="w-[36px] h-[36px] rounded-full border-2 border-black flex items-center justify-center hover:bg-black group transition"
              >
                <svg viewBox="0 0 24 24" stroke="#DCFB46" strokeWidth="2.5" fill="none">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>

            </div>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          ref={containerRef}
          className="flex gap-[24px] overflow-x-hidden justify-center px-[300px]"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => {
            setPause(false);
            setHover(null);
          }}
        >
          {data.map((item, i) => (
            <Card
              key={i}
              item={item}
              active={hover === i || active === i}
              setHover={() => setHover(i)}
              clearHover={() => setHover(null)}
              refProp={(el) => (refs.current[i] = el)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}