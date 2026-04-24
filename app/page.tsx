import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Mission } from "@/components/mission";
import { Contact } from "@/components/contact/contact";
import { Problem } from "@/components/problem";
import { Blogs } from "@/components/blogs";
import { client } from "@/sanity/lib/client";
import { blogQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const blogs = await client.fetch(blogQuery);

  return (
    <div className="bg-[#0F0A06]">
      <Navbar />
      <Hero />
      <About />
      <Problem />
      <Mission />
      <Blogs blogs={blogs} />
      <Contact />
      <Footer />
    </div>
  );
}
