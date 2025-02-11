import MessageImage1 from "@/assets/messages/1.jpg";
import MessageImage2 from "@/assets/messages/2.jpg";
import MessageImage3 from "@/assets/messages/3.jpg";

const JewelryMessage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-center uppercase">
      <div className="space-y-8">
        {/* First section */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <p className="text-3xl md:text-3xl">
            JEWELRY IS MORE THAN JUST AN ACCESSORY, IT'S AN
          </p>
          <div className="flex items-center gap-2">
            <p className="text-3xl md:text-3xl">EXPRESSION AND</p>
            <img
              src={MessageImage1}
              alt="Elegant ring with emerald stone"
              className="w-32 h-12 object-cover rounded-full"
            />
            <p className="text-3xl md:text-3xl">TIMELESS BEAUTY</p>
          </div>
        </div>

        {/* Second section */}
        <div className="space-y-6">
          <p className="text-xl md:text-3xl">
            That's the reason why each piece in our collection
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <p className="text-xl md:text-3xl">
              is thoughtfully curated and expertly crafted using
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src={MessageImage2}
              alt="Luxury ring with sapphire"
              className="w-32 h-12 object-cover rounded-full"
            />
            <p className="text-3xl md:text-3xl font-medium">
              THE HIGHEST QUALITY MATERIALS
            </p>

            <img
              src={MessageImage3}
              alt="Detailed jewelry craftsmanship"
              className="w-32 h-12 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryMessage;
