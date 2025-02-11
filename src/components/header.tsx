import { Search } from "lucide-react";
import { useEffect } from "react";
import { useAnimation } from "@/context/animation-context";
import { useDynamicRefs } from "@/hooks/use-dynamic-refs";
import { splitText } from "@/lib/utils";

const navigation = [
  { name: "ALL JEWELRY", href: "/all-jewelry" },
  { name: "HIGH JEWELRY", href: "/high-jewelry" },
  { name: "FINE JEWELRY", href: "/fine-jewelry" },
  { name: "VINTAGE JEWELRY", href: "/vintage-jewelry" },
  { name: "BY DESIGNER", href: "/designers" },
  { name: "ART OF GIVING", href: "/giving" },
];

const contentHeader = {
  title: "Radiate Elegance with",
  mainTitle: "Eluxee Jeweiry",
};

const Header = () => {
  const { gsap } = useAnimation();
  const { handleAddRef, getRefsByKey } = useDynamicRefs();

  useEffect(() => {
    const containers = getRefsByKey("container");
    const titles = getRefsByKey("title");
    const headerLinks = getRefsByKey("header-link");

    const timeline = gsap.timeline();

    containers.forEach((el) => {
      const split = splitText(el);
      timeline.from(
        split,
        {
          yPercent: 160,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
        },
      );
    });
    titles.forEach((el) => {
      const split = splitText(el);
      timeline.from(
        split,
        {
          yPercent: 160,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
        },
      );
    });

    headerLinks.forEach((el) => {
      timeline.fromTo(
        el,
        {
          yPercent: 30,
          opacity: 0,
          duration: 0.5,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.10,
          ease: "power3.out",
        },
      );
    });
  }, [getRefsByKey, gsap]);

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="flex flex-col justify-center items-center gap-4 py-10">
            <h5 className="title-header" ref={(e) => handleAddRef("container", e)}>{contentHeader.title}</h5>
            <a href="/" className="title-website" ref={(e) => handleAddRef("title", e)}>
              {contentHeader.mainTitle}
            </a>
          </div>
          <div className="hidden md:block w-full py-4 mt-6">
            <div className="flex items-center justify-around overflow-hidden">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="title-header header-link"
                  ref={(e) => handleAddRef("header-link", e)}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-search">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
