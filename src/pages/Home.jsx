import Advice from "./Home/Advice";
import Banner from "./Home/Banner";
import BestSellers from "./Home/BestSellers";
import Catalogue from "./Home/Catalogue";
import Collections from "./Home/CollectionsSection";
import Faq from "./Home/Faq";
import Hero from "./Home/Hero";
import Reviews from "./Home/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <BestSellers />
      <Catalogue />
      <Advice />
      <Faq />
      <Reviews />
      <Banner />
    </>
  );
}
