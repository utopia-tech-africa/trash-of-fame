import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Mission } from "@/components/mission";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <div className="bg-[#0F0A06]">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}
