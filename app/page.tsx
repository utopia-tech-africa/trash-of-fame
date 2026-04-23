import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Mission } from "@/components/mission";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Footer />
    </>
  );
}
