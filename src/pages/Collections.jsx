import SurfacesSection from "./Collections/SurfacesSection";
import CatalogueHighlight from "./Collections/CatalogueHighlight";

import Intro from "./Home/Intro";

import Presentation from "./Home/Presentation";
import Process from "./Home/Process";
import Why from "./Home/Why";

export default function Collections() {
  return (
    <>
    <SurfacesSection />
    <CatalogueHighlight />
    <Why />
    <Process />
    <Presentation />
    <Intro />
    </>
  );
}