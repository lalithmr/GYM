import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import OurPlans from "./components/OurPlans";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-[#BBBBBB]">
      <section className="flex w-full justify-center">
        <Navbar />
      </section>

      <section className="flex w-full justify-center">
        <Hero />
      </section>

      <section className="flex w-full justify-center">
        <OurServices />
      </section>

      <section className="flex w-full justify-center">
        <OurPlans />
      </section>

      <section className="flex w-full justify-center">
        <Testimonials />
      </section>

      <section className="flex w-full justify-center">
        <Footer />
      </section>
    </div>
  );
}

export default App;
