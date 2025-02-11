import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

const contentFooter = {
  left: {
    name: "Eluxee Jewelry",
    socials: [
      { Icon: Instagram, link: "/" },
      { Icon: Youtube, link: "/" },
      { Icon: Twitter, link: "/" },
      { Icon: Facebook, link: "/" },
      { Icon: Linkedin, link: "/" },
    ],
  },
  right: [
    {
      title: "Customer Care",
      contents: [
        { label: "Book an appointment", link: "/" },
        { label: "Contact us", link: "/" },
        { label: "Faq", link: "/" },
      ],
    },
    {
      title: "Information",
      contents: [
        { label: "Certificates", link: "/" },
        { label: "Privacy Policy", link: "/" },
        { label: "Terms & Condition", link: "/" },
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-footer text-white max-h-screen h-screen w-full bg-center overflow-hidden">
      <div className="w-full h-full flex flex-col justify-between pt-32 px-10 pb-10">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <h2 className="uppercase font-second text-3xl text-center">
            Subscribe to our newsletter
          </h2>
          <div className="w-2/3 relative mt-6">
            <input
              type="email"
              placeholder="YOUR E-MAIL HERE"
              autoComplete="email"
              aria-label="Email address"
              className="block w-full rounded-full border border-transparent bg-white/10 py-7 pl-12 pr-20 uppercase text-xl/6 ring-4 ring-transparent transition placeholder:text-white focus:border-white focus:outline-none focus:ring-white/5 font-second group"
            />
            <div className="absolute inset-y-1.5 right-1.5 flex justify-end">
              <button
                type="submit"
                aria-label="Submit"
                className="flex aspect-square h-full items-center justify-center rounded-full bg-white/20 text-white transition group-focus:border-white"
              >
                <Mail size={22} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <ul className="flex items-center gap-3 mb-10">
              {contentFooter.left.socials.map((item, index) => (
                <li key={index} className="p-2.5 bg-white/20 text-white rounded-full hover:border-white hover:opacity-80 border border-transparent">
                  <a href={item.link}>
                    <item.Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
            <h1 className="title-website">{contentFooter.left.name}</h1>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {contentFooter.right.map((item, index) => (
              <div key={index} className="uppercase flex flex-col items-start gap-3">
                <h5 className="mb-1 font-bold">{item.title}</h5>
                {item.contents.map((cnt, i) => (
                  <a key={i} href={cnt.link} className="hover:underline transition text-sm">{cnt.label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
