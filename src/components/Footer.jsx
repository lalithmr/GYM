import React from "react";

const services = [
  "Packages",
  "Testimonials",
  "Live Classes",
  "One-on-on Class",
];

const contacts = [
  {
    label: "Bangalore, Karnataka, India-cp",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none">
        <path
          d="M12 21C15.75 17.25 19 13.89 19 10A7 7 0 1 0 5 10C5 13.89 8.25 17.25 12 21Z"
          stroke="#DCFB46"
          strokeWidth="2"
        />
        <circle cx="12" cy="10" r="2.5" stroke="#DCFB46" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "+91-9034323322",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none">
        <path
          d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.3 4 3.92C4 3.36 4.45 2.92 5 2.92H8V7.12L6.55 8.42C7.38 11.1 9.48 13.19 12.16 14.03L12.48 12.38H16.66V15.92H22Z"
          stroke="#DCFB46"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Info.yatradiscover.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none">
        <rect x="4" y="6" width="16" height="12" stroke="#DCFB46" strokeWidth="2" />
        <path d="M4 7L12 13L20 7" stroke="#DCFB46" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#666666] font-['Poppins'] text-black overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="mx-auto w-full max-w-[1440px] px-[12px] pt-[40px] lg:pt-[57px]">

        <div className="flex flex-col lg:flex-row justify-between gap-[40px] pb-[40px]">

          {/* LEFT */}
          <div className="lg:w-[378px] text-center lg:text-left">
            <h2 className="text-[26px] font-bold tracking-[0.14em]">
              SVASTHA TEKTHON
            </h2>

            <p className="mt-[26px] text-[16px] leading-[1.45] max-w-[333px] mx-auto lg:mx-0">
              Helping people achieve their goals by specific and custom designed
              plans, and building community of strong people.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-[30px] flex justify-center lg:justify-start gap-[24px]">

              {/* Instagram */}
              <svg viewBox="0 0 24 24"
                className="h-[38px] w-[38px] cursor-pointer transition hover:scale-110 hover:opacity-70"
                fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="#1E2939" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="#1E2939" strokeWidth="2" />
                <circle cx="17" cy="7" r="1.2" fill="#1E2939" />
              </svg>

              {/* Facebook */}
              <svg viewBox="0 0 24 24"
                className="h-[38px] w-[38px] cursor-pointer transition hover:scale-110 hover:opacity-70"
                fill="none">
                <path
                  d="M14 8H16V4H13C10.79 4 9 5.79 9 8V11H6V15H9V20H13V15H16L17 11H13V8C13 7.44 13.44 7 14 7V8Z"
                  fill="#1E2939"
                />
              </svg>

              {/* Twitter (X) */}
              <svg viewBox="0 0 24 24"
                className="h-[38px] w-[38px] cursor-pointer transition hover:scale-110 hover:opacity-70"
                fill="#1E2939">
                <path d="M18.244 2H21L14.46 9.48L22 22H16.406L11.684 14.406L5.75 22H3L10.02 13.78L2.8 2H8.594L12.86 8.98L18.244 2Z" />
              </svg>

            </div>
          </div>

          {/* SERVICES */}
          <div className="text-center lg:text-left">
            <h3 className="text-[16px] font-bold">Services</h3>

            <ul className="mt-[34px] space-y-[20px] text-[16px]">
              {services.map((item) => (
                <li key={item} className="hover:opacity-70 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center lg:text-left">
            <h3 className="text-[16px] font-bold">Contact us</h3>

            <ul className="mt-[28px] space-y-[18px]">
              {contacts.map((item) => (
                <li key={item.label} className="flex gap-[10px] items-start justify-center lg:justify-start">
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-black/60 py-[24px] flex flex-col md:flex-row justify-between items-center gap-[20px]">

          <p className="text-[16px] text-black/70 text-center md:text-left">
            © 2026 LYPTRON. Made with ❤️ for Gym Nerds.
          </p>

          <div className="flex gap-[20px] md:gap-[56px] text-[16px] font-bold">
            <button className="hover:opacity-70">Privacy policy</button>
            <button className="hover:opacity-70">Terms of service</button>
            <button className="hover:opacity-70">Cookie policy</button>
          </div>

        </div>

      </div>
    </footer>
  );
}