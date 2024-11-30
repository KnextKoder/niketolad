import Image from "next/image";
// import Balancer from "react-wrap-balancer";
import { Section } from "@/components/craft";
import Placeholder from "@/public/sales and distribution of QC products.png"

export default function Hero() {
  return (
    <Section className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
      <div className="flex items-center justify-center h-full w-9/12">
        <Image
          className="absolute inset-0 h-full w-full object-fit"
          src={Placeholder}
          width={1920}
          height={1080}
          alt="hero image"
          placeholder="blur"
        />
      </div>
    </Section>
  );
}