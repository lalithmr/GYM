import Image from "next/image";

type Stat = {
  value: string;
  label: string;
};

type Service = {
  title: string;
  description: string;
  accent: string;
  icon: "salad" | "zumba" | "yoga" | "training";
};

const stats: Stat[] = [
  { value: "23K+", label: "Active Members" },
  { value: "103K+", label: "Community Members" },
  { value: "103K+", label: "Svastha Members" },
];

const services: Service[] = [
  {
    title: "Fresh Salad Recipes",
    description:
      "Checkout the fresh salad recipes with veg and non-veg options.",
    accent: "from-[#EFFD98] to-[#DCFB46]",
    icon: "salad",
  },
  {
    title: "Online Zumba Live Classes",
    description:
      "Feel the music and find your groove with our expert teacher's team.",
    accent: "from-[#F8D9E1] to-[#DAB6C2]",
    icon: "zumba",
  },
  {
    title: "Live YOGA Classes",
    description:
      "Find inner peace with yogic practices and guided mindful movement.",
    accent: "from-[#E6E8B6] to-[#C8D26A]",
    icon: "yoga",
  },
  {
    title: "Personal Training Plans",
    description:
      "Custom-built plans tailored to your body, goals, and training style.",
    accent: "from-[#F4E2B7] to-[#E0C26B]",
    icon: "training",
  },
];

function ServiceIllustration({ icon }: { icon: Service["icon"] }) {
  const baseClass =
    "flex h-24 w-24 items-center justify-center rounded-[28px] border border-black/10 bg-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.08)]";

  if (icon === "salad") {
    return (
      <div className={baseClass}>
        <svg viewBox="0 0 96 96" className="h-16 w-16" fill="none">
          <path
            d="M18 54C18 69.464 30.536 82 46 82H50C65.464 82 78 69.464 78 54V52H18V54Z"
            fill="#7C5A2B"
          />
          <path
            d="M25 49C25 37.402 34.402 28 46 28H50C61.598 28 71 37.402 71 49V52H25V49Z"
            fill="#C69252"
          />
          <circle cx="40" cy="41" r="8" fill="#7CCB5E" />
          <circle cx="57" cy="39" r="7" fill="#E34C4C" />
          <circle cx="52" cy="50" r="7" fill="#5FAE47" />
          <path d="M31 48L40 57" stroke="#2E6A27" strokeWidth="4" strokeLinecap="round" />
          <path d="M62 46L55 57" stroke="#2E6A27" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (icon === "zumba") {
    return (
      <div className={baseClass}>
        <svg viewBox="0 0 96 96" className="h-16 w-16" fill="none">
          <circle cx="48" cy="20" r="10" fill="#111111" />
          <path
            d="M47 33L58 44L71 40"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M47 34L36 49L26 44"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48 35L50 61"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M49 61L65 74"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M49 61L35 76"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (icon === "yoga") {
    return (
      <div className={baseClass}>
        <svg viewBox="0 0 96 96" className="h-16 w-16" fill="none">
          <circle cx="48" cy="22" r="9" fill="#111111" />
          <path
            d="M48 34V52"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M33 44L48 54L63 44"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48 52L35 72"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M48 52L61 72"
            stroke="#111111"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={baseClass}>
      <svg viewBox="0 0 96 96" className="h-16 w-16" fill="none">
        <circle cx="48" cy="20" r="10" fill="#111111" />
        <path
          d="M48 34V55"
          stroke="#111111"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M27 42H69"
          stroke="#111111"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M48 55L34 75"
          stroke="#111111"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M48 55L62 75"
          stroke="#111111"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-[#BBBBBB] pt-28 text-black sm:pt-32 lg:pt-36">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[300px_minmax(360px,1fr)_260px] lg:gap-12">
          <div className="order-1 flex max-w-[320px] flex-col items-start">
            <h1 className="text-[44px] font-semibold uppercase leading-[1.1] tracking-[-0.03em] text-black sm:text-[52px] lg:text-[64px] lg:leading-[80px]">
              <span className="block">Personal</span>
              <span className="block">Training</span>
              <span className="block">With</span>
              <span className="block text-[#DCFB46]">Rossi</span>
            </h1>

            <button
              type="button"
              className="mt-8 rounded-full border border-[#DCFB46] px-6 py-2 text-base font-medium text-black transition-all duration-300 hover:bg-[#DCFB46] hover:shadow-[0_10px_24px_rgba(220,251,70,0.28)]"
            >
              Join for free
            </button>
          </div>

          <div className="order-2 flex flex-col items-center gap-8">
            <div className="relative flex w-full max-w-[430px] justify-center">
              <div className="absolute inset-x-8 top-10 -z-10 h-[78%] rounded-[48px] bg-gradient-to-b from-white/45 to-white/10 blur-2xl" />
              <Image
                src="/hero-model.png"
                alt="Rossi personal trainer"
                width={388}
                height={890}
                priority
                className="h-auto max-h-[760px] w-full max-w-[388px] object-contain"
              />
            </div>

            <p className="max-w-[760px] text-center text-[28px] font-medium leading-[1.25] tracking-[-0.03em] text-black sm:text-[32px] lg:text-[36px]">
              Join our community and be the best form of your life
            </p>
          </div>

          <div className="order-3 flex justify-center lg:justify-end">
            <div className="flex w-full max-w-[240px] flex-col items-center rounded-[32px] bg-white/20 px-6 py-8 text-center shadow-[0_20px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm">
              <div className="rounded-full bg-[#D9D9D9] p-5 shadow-[0_18px_30px_rgba(0,0,0,0.08)]">
                <Image
                  src="/foodinherosection.png"
                  alt="Expert diet bowl"
                  width={170}
                  height={170}
                  className="h-[170px] w-[170px] rounded-full object-cover"
                />
              </div>

              <div className="my-5 h-12 w-px bg-[#DCFB46]" />

              <p className="text-center text-[28px] font-medium leading-[1.25] tracking-[-0.03em] text-black lg:text-[30px]">
                Join and Get Our Expert Diet
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 rounded-[32px] bg-white/18 px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center gap-2 text-center lg:px-8 ${
                index < stats.length - 1
                  ? "lg:border-r lg:border-[#DCFB46]"
                  : ""
              }`}
            >
              <span className="text-[36px] font-bold leading-none text-[#DCFB46]">
                {stat.value}
              </span>
              <span className="text-[22px] font-medium leading-[1.25] text-black sm:text-[24px] lg:text-[28px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
            <h2 className="text-[20px] font-bold uppercase tracking-[0.08em] text-black">
              <span className="text-[#DCFB46]">Our </span>
              <span>Services</span>
            </h2>

            <p className="text-base font-medium leading-7 text-black">
              At this part you can easily access all of our services. Take a
              look at them and choose whichever you want.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex min-h-[260px] flex-col justify-between rounded-[28px] border border-[#DCFB46] bg-white/20 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 pr-2 text-left">
                    <h3 className="text-left text-[18px] font-medium leading-6 text-black">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-left text-[12px] font-medium leading-5 text-black/80">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-[32px] bg-gradient-to-br ${service.accent}`}
                  >
                    <ServiceIllustration icon={service.icon} />
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 self-start text-left text-[12px] font-medium text-black transition-colors duration-300 hover:text-[#6E7E23]"
                >
                  <span>Learn More</span>
                  <span className="text-[#DCFB46] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
