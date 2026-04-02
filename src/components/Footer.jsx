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
          d="M12 21C15.75 17.25 19 13.8921 19 10A7 7 0 1 0 5 10C5 13.8921 8.25 17.25 12 21Z"
          stroke="#DCFB46"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
          d="M22 16.92V19.92C22 20.4723 21.5523 20.92 21 20.92C11.6112 20.92 4 13.3088 4 3.92C4 3.36772 4.44772 2.92 5 2.92H8C8.55228 2.92 9 3.36772 9 3.92V7.12C9 7.59411 8.66422 8.00192 8.2 8.093L6.55 8.42C7.38336 11.1003 9.47967 13.1966 12.16 14.03L12.487 12.38C12.5781 11.9158 12.9859 11.58 13.46 11.58H16.66C17.2123 11.58 17.66 12.0277 17.66 12.58V15.92C17.66 16.4723 17.2123 16.92 16.66 16.92H22Z"
          stroke="#DCFB46"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Info.yatradiscover.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none">
        <path
          d="M4 6H20V18H4V6Z"
          stroke="#DCFB46"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 7L12 13L20 7"
          stroke="#DCFB46"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[38px] w-[38px]" fill="none">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="#1E2939"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="#1E2939" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="#1E2939" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[38px] w-[38px]" fill="none">
      <path
        d="M14 8H16V4H13C10.7909 4 9 5.79086 9 8V11H6V15H9V20H13V15H16L17 11H13V8C13 7.44772 13.4477 7 14 7V8Z"
        fill="#1E2939"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[38px] w-[38px]" fill="none">
      <path
        d="M21 6.2C20.3 6.5 19.6 6.7 18.8 6.8C19.6 6.3 20.2 5.5 20.5 4.6C19.8 5.1 19 5.4 18.1 5.6C17.4 4.8 16.3 4.3 15.1 4.3C12.9 4.3 11.1 6.1 11.1 8.3C11.1 8.6 11.1 8.9 11.2 9.2C7.9 9 5 7.4 3 5C2.7 5.6 2.5 6.3 2.5 7.1C2.5 8.5 3.2 9.7 4.3 10.4C3.7 10.4 3.1 10.2 2.6 9.9V10C2.6 12 4 13.7 5.9 14.1C5.6 14.2 5.2 14.2 4.9 14.2C4.6 14.2 4.4 14.2 4.1 14.1C4.6 15.7 6.1 16.9 7.9 16.9C6.5 18 4.7 18.7 2.7 18.7C2.4 18.7 2.2 18.7 2 18.6C3.8 19.8 5.9 20.5 8.2 20.5C15.1 20.5 18.9 14.8 18.9 9.8V9.3C19.6 8.8 20.4 8.1 21 7.3V6.2Z"
        fill="#1E2939"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#666666] font-['Poppins'] text-black overflow-hidden relative z-30">
      <div className="mx-auto flex min-h-[400px] w-full max-w-[1440px] flex-col px-6 lg:px-[54px] pt-[40px] lg:pt-[57px]">

        <div className="flex flex-col lg:flex-row flex-1 justify-between gap-[40px] lg:gap-0 pb-[40px] lg:pb-0">
          <div className="w-full lg:w-[378px]">
            <h2 className="text-[26px] font-bold tracking-[0.14em] text-black text-center lg:text-left">
              SVASTHA TEKTHON
            </h2>

            <p className="mt-[20px] lg:mt-[26px] w-full lg:w-[333px] text-[16px] font-medium leading-[1.45] text-black text-center lg:text-left mx-auto lg:mx-0 max-w-[400px] lg:max-w-none">
              Helping people achieve their goals by specific and custom designed
              plans, and building community of strong people.
            </p>

            <div className="mt-[24px] lg:mt-[30px] flex items-center justify-center lg:justify-start gap-[24px]">
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </div>

          <div className="w-full lg:w-[180px] lg:pt-[2px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-[18px] lg:text-[16px] font-bold leading-none text-black">
              Services
            </h3>

            <ul className="mt-[20px] lg:mt-[34px] space-y-[16px] lg:space-y-[20px] text-[16px] font-medium leading-none text-black drop-shadow-sm">
              {services.map((item) => (
                <li key={item} className="cursor-pointer hover:opacity-75 transition-opacity">{item}</li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-[306px] lg:pt-[2px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-[18px] lg:text-[16px] font-bold leading-none text-black">
              Contact us
            </h3>

            <ul className="mt-[20px] lg:mt-[28px] space-y-[18px] flex flex-col items-center lg:items-start">
              {contacts.map((item) => (
                <li key={item.label} className="flex items-start gap-[10px] w-full justify-center lg:justify-start max-w-[280px] lg:max-w-none">
                  <span className="mt-[1px] shrink-0">{item.icon}</span>
                  <span className="text-[16px] font-medium leading-[1.35] text-black text-left">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row min-h-[72px] items-center lg:items-end justify-between border-t border-black/60 py-[24px] lg:py-0 lg:pb-[24px] gap-[20px] lg:gap-0 mt-[20px] lg:mt-auto">
          <p className="flex flex-wrap items-center justify-center lg:justify-start gap-[5px] text-[16px] font-medium text-black/70">
            <span>© 2026 LYPTRON. Made with</span>
            <span className="text-[#FB2C36] animate-pulse">❤️</span>
            <span>for Gym Nerds.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-[20px] md:gap-[56px] text-[15px] lg:text-[16px] font-bold text-black drop-shadow-sm">
            <button type="button" className="hover:opacity-70 transition-opacity whitespace-nowrap">Privacy policy</button>
            <button type="button" className="hover:opacity-70 transition-opacity whitespace-nowrap">Terms of service</button>
            <button type="button" className="hover:opacity-70 transition-opacity whitespace-nowrap">Cookie policy</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
