import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Ventures } from "@/components/sections/Ventures";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Ventures />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
