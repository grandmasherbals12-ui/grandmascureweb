import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://cdn.pixabay.com/photo/2020/05/11/22/32/herbs-5160497_1280.jpg"
      >
        <source
          src="https://cdn.pixabay.com/video/2020/05/05/38149-420380117_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-cormorant font-bold">
          Grandma's Herbal Haven
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Rediscover the healing power of nature with our handcrafted herbal
          remedies, passed down through generations.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg" className="bg-olive-500 hover:bg-olive-600">
            <Link to="/shop">
              Shop Now <ShoppingCart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white">
            <Link to="/consultation">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
