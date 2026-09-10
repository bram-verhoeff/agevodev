import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Ventures } from "@/components/sections/Ventures";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Ventures />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
