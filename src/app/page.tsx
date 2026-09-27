import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import CaraOrder from "@/components/CaraOrder";
import PalingLaris from "@/components/PalingLaris";
import Testimoni from "@/components/Testimoni";
import MenuLarge from "@/components/MenuLarge";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MenuSection />
      <CaraOrder />
      <PalingLaris />
      <Testimoni />
      <MenuLarge />
      <CTA />
      <Footer />
    </>
  );
}
