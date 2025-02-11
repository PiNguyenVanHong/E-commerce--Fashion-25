import HeroImage from "@/assets/hero/1.jpg";

import Header from "@/components/header";
import HeroSlider from "@/components/hero-slider";
// import ProductGrid from "@/components/product-grid";
// import BrandStory from "@/components/brand-story";
// import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import FloatingMenuButton from "@/components/floating-menu-button";
import JewelryMessage from "@/components/JewelryMessage";
import FeaturesSection from "@/components/features-section";

function App() {
  return (
    <div className="min-h-screen">
      <div className="h-screen w-full m-0 flex flex-col">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <img src={HeroImage} alt="" />
        </div>
      </div>
      <main>
        <HeroSlider />
        <JewelryMessage />
        {/* <BrandStory />
        <Newsletter /> */}
        <FeaturesSection />
      </main>
      <Footer />
      <FloatingMenuButton />
    </div>
  );
}

export default App;
