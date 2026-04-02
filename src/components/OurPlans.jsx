import React from "react";

const plans = [
  {
    id: 1,
    nameLead: "PRO",
    nameTail: "PLAN",
    price: "1,999",
    highlighted: false,
    description: [
      "Our Pro Plan Offers Advanced Workout plans",
      "with Salad recipes every week.",
      "If you reach your goals Faster,",
      "SIGN UP right Now!!",
    ],
    features: [
      "Access to all of my Exercise Videos",
      "Daily One-on-One Video calls.",
      "Supportive Online Community",
      "Advanced, Personalized workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access to Advanced workout Programs",
      "Body Composition Analysis",
    ],
  },
  {
    id: 2,
    nameLead: "Executive",
    nameTail: "PLAN",
    price: "2,999",
    highlighted: true,
    description: [
      "Our Pro Plan Offers Advanced Workout plans",
      "with Salad recipes every week.",
      "Help you reach your goals Faster,",
      "SIGN UP right Now!!",
    ],
    features: [
      "Access to all of my Exercise Videos",
      "Daily One-on-One Video calls.",
      "Supportive Online Community",
      "Advanced, Personalized workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access to Advanced workout Programs",
      "Body Composition Analysis",
    ],
  },
  {
    id: 3,
    nameLead: "PRO",
    nameTail: "PLAN",
    price: "1,999",
    highlighted: false,
    description: [
      "Our Pro Plan Offers Advanced Workout plans",
      "with Salad recipes every week.",
      "If you reach your goals Faster,",
      "SIGN UP right Now!!",
    ],
    features: [
      "Access to all of my Exercise Videos",
      "Daily One-on-One Video calls.",
      "Supportive Online Community",
      "Advanced, Personalized workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access to Advanced workout Programs",
      "Body Composition Analysis",
    ],
  },
];

function PlanCard({ plan }) {
  return (
    <div className="relative flex items-end justify-center w-[340px] sm:w-[389px] h-[510px] sm:h-[584px] z-0 hover:z-20 shrink-0">
      <article
        className={`group absolute bottom-0 flex h-[638px] w-[425px] origin-bottom flex-col items-center rounded-[22px] border-2 bg-[#BBBBBB] px-[26px] pb-[28px] pt-[22px] font-poppins transition-transform duration-300 ease-in-out scale-[0.8] sm:scale-[0.9153] hover:scale-100 ${
          plan.highlighted
            ? "border-black shadow-[0_14px_32px_rgba(0,0,0,0.06)] z-10"
            : "border-black z-0"
        } hover:border-[#DCFB46]`}
      >
        {/* Package */}
        <span className="text-[13px] font-medium text-black">Package</span>

        {/* Title */}
        <h3 className="mt-[19px] text-center text-[37px] font-bold text-black">
          <span className="text-[#DCFB46]">{plan.nameLead} </span>
          <span>{plan.nameTail}</span>
        </h3>

        {/* Description */}
        <div className="mt-[26px] text-center">
          <p className="text-[12px] font-medium text-black">Description</p>

          <p className="mt-[21px] text-[11px] font-medium text-black leading-[1.45]">
            {plan.description.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* Features */}
        <div className="mt-[20px] flex flex-1 flex-col items-center w-full">
          <p className="text-[12px] font-semibold text-black">Features</p>

          <ul className="mt-[18px] w-[268px] list-disc pl-[14px] space-y-[4px] text-[10px] text-black">
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="mt-[18px] text-center">
          <p className="text-[38px] font-bold text-black">
            <span className="mr-[6px] text-[#DCFB46]">₹</span>
            {plan.price}
          </p>
        </div>

        {/* Button */}
        <button
          className="mt-[23px] h-[40px] w-[214px] rounded-full border border-[#DCFB46] bg-[#000000] font-semibold text-white transition-all duration-300 hover:bg-[#DCFB46] hover:text-black"
        >
          Purchase
        </button>
      </article>
    </div>
  );
}

export default function OurPlans() {
  return (
    <section className="w-full flex justify-center bg-[#BBBBBB] py-[20px] xl:py-[30px] overflow-hidden">
      <div className="w-full max-w-[1440px] flex flex-col items-center px-4 xl:px-8">
        {/* Heading */}
        <div className="pt-[20px] text-center">
          <h2 className="text-[18px] font-bold">
            <span className="text-[#DCFB46]">Our </span>
            <span className="text-black">Plans</span>
          </h2>

          <p className="mt-[11px] w-full max-w-[632px] mx-auto text-[18px] font-medium text-black px-4 lg:px-0">
            At This Part You Can Easily Access All Of Our Services. Take A Look
            At Them And Choose Which Ever You Want.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="mt-[50px] xl:mt-[74px] flex flex-wrap w-full lg:max-w-[1335px] justify-center xl:justify-between items-center xl:items-end gap-[40px] lg:gap-[60px] xl:gap-[20px]">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}