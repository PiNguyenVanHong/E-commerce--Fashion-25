import Hero2 from "@/assets/hero/2.jpg";
import Hero3 from "@/assets/hero/3.jpg";
import Image1 from "@/assets/products/1.png";
import Image2 from "@/assets/products/2.png";
import Image3 from "@/assets/products/3.png";
import Image4 from "@/assets/products/4.png";
import Image5 from "@/assets/products/5.png";
import Image6 from "@/assets/products/6.png";
import Image7 from "@/assets/products/7.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const slides = [
  {
    id: 2,
    title: "Engagement rings",
    image: Hero2,
    cta: "Shop now",
  },
  {
    id: 3,
    title: "Diamond earrings",
    image: Hero3,
    cta: "Shop now",
  },
];

const products = [
  { src: Image1 },
  { src: Image2 },
  { src: Image3 },
  { src: Image4 },
  { src: Image5 },
  { src: Image6 },
  { src: Image7 },
];

const HeroSlider = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const images = carouselRef.current.children;
    const totalWidth = Array.from(images).reduce(
      (acc, img) => acc + (img as HTMLElement).offsetWidth,
      0
    );

    // Clone images to create infinite loop effect
    Array.from(images).forEach((img) => {
      let clone = img.cloneNode(true);
      carouselRef.current?.appendChild(clone);
    });

    // Create GSAP timeline
    tl.current = gsap.timeline({ repeat: -1, ease: "none" });
    tl.current.to(carouselRef.current, {
      x: `-${totalWidth}px`,
      duration: 15,
      ease: "linear",
    });

    return () => {
      tl.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => tl.current?.pause();
  const handleMouseLeave = () => tl.current?.resume();

  return (
    <div className="w-full h-screen m-0 flex flex-col gap-6">
      <div className="flex-1 grid overflow-hidden grid-cols-2">
        {slides.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full flex flex-col items-center justify-end pb-10`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="text-center">
              <h4 className="text-white text-3xl uppercase">{item.title}</h4>
              <button className="bg-white py-2 px-4 uppercase font-bold mt-4">
                {item.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[350px] overflow-hidden relative bg-transparent">
        <div
          // ref={carouselRef}
          className="flex gap-6 w-[5000%] h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {products.map((item, index) => (
            <div className="w-72 h-full py-16 px-4 bg-zinc-200/70" key={index}>
              <img
                key={index}
                src={item.src}
                className="object-contain"
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
