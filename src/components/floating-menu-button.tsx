import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown, Globe, ShoppingBag, User } from "lucide-react";

const menuLinks = [
  {
    title: "Language",
    Icon: Globe,
    action: () => {},
    items: [
      { title: "VN", action: () => {} },
      { title: "EN", action: () => {} },
    ],
  },
  { title: "Account", Icon: User, action: () => {} },
  { title: "Cart", Icon: ShoppingBag, action: () => {} },
];

const FloatingMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          stagger: 0.5,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.8,
        duration: 0.2,
        stagger: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-10 right-10 flex flex-col-reverse items-end gap-2">
      <label className="btn-hamburger">
        <input type="checkbox" onChange={() => setIsOpen(!isOpen)} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      <div className="flex flex-col-reverse items-end gap-2 mb-2 w-40">
        {menuLinks.map((icon, index) => (
          <div
            key={index}
            ref={(el) => (menuItemsRef.current[index] = el)}
            className="w-12 h-12 flex items-center justify-end transition-all duration-1000 group hover:w-full overflow-hidden relative rounded-full"
          >
            <div className="px-4 w-fit h-12 absolute right-0 pr-0 group-hover:pr-12 z-0 transition-all duration-700 flex items-center justify-center after:w-full after:h-full after:absolute after:left-1 after:bg-white after:rounded-full after:-z-10">
              <div className="uppercase inline-flex items-center gap-1 w-full text-sm">
                {(icon.items?.length ?? 0) > 0 && <ChevronDown size={18} />}
                <div>{icon.title}</div>
              </div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 absolute z-10 bg-white rounded-full">
              <icon.Icon className="stroke-[1px]" size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingMenuButton;
