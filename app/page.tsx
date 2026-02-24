import Contact from "@/components/landingpage/contact";
import { Features } from "@/components/landingpage/features";
import Footer from "@/components/landingpage/footer";
import { Hero } from "@/components/landingpage/hero";
import LogoCloud from "@/components/landingpage/logo-cloud";
import Pricing from "@/components/landingpage/pricing";
import Statistics from "@/components/landingpage/statistics";
import Team from "@/components/landingpage/team";
import Testimonial from "@/components/landingpage/testimonial";
import { YtPromo } from "@/components/landingpage/ytPromo";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <BackgroundVideo src="/actina.mp4" height="200px" className="grayscale-[50%]"/> */}
      <YtPromo />
      <Features />
      <Testimonial />
      <Statistics />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
      {/* <FAQ />
       */}
    </>
  );
}
