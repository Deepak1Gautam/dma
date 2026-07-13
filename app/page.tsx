import Testimonials from "@/components/Testimonials";
import TopFreelancers from "@/components/TopFreelancers";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <TopFreelancers />
      <Testimonials />
      <Footer />
    </div>
  );
}
