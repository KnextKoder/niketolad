import Image from "next/image";
// import Balancer from "react-wrap-balancer";
import { Section } from "@/components/craft";
import Placeholder from "@/public/sales and distribution of QC products.png"

export default function Hero() {
  return (
    <div>
      <Section className="relative h-screen w-screen hidden md:flex justify-center items-center overflow-hidden mb-4">
        <div className="absolute inset-0 h-full w-full px-16">
          <Image
            className="object-fit rounded-3xl h-full w-full"
            src={Placeholder}
            width={809}
            height={1080}
            alt="hero image"
            placeholder="blur"
          />
        </div>
      </Section>
      <SmallHero />
    </div>
  );
}

export function SmallHero() {
  return (
    <Section className="relative w-full flex md:hidden overflow-hidden mt-5 py-0">
      {/* Main container - removing fixed height to match content */}
      <div className="relative w-full aspect-[16/9] max-h-[50vh] flex items-end justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-contain"
            src={Placeholder}
            alt="hero image"
            placeholder="blur"
            priority
            fill
          />
        </div>
      </div>
    </Section>
  );
}