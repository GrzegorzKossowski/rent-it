import { Features } from "@/components/landingpage/features";
import Footer from "@/components/landingpage/footer";
import { Hero } from "@/components/landingpage/hero";
import Pricing from "@/components/landingpage/pricing";
import Testimonial from "@/components/landingpage/testimonial";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <Footer />
      {/* <FAQ />
       */}
    </>
  );
}
