import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import Placeholder from "@/public/Nikentolad Logos/Efficient quality control background.png";
// import Placeholder from '@/public/nikentolad-projects/WhatsApp Image 2024-11-16 at 17.01.41_3fff536b.jpg'
// import Placeholder from '@/public/nikentolad-projects/farm tank1.png'

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
        <Container className="relative z-10 flex h-full items-end justify-center pb-8 text-center">
          <div className="bg-transparent p-4 rounded-lg mb-8">
            <h1 className="text-white text-5xl">
              <Balancer>Efficient</Balancer>
            </h1>
            <h1 className="text-white font-bold text-5xl md:text-5xl">
              <Balancer>Quality Control</Balancer>
            </h1>
          </div>
        </Container>
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
        
        {/* Text positioned at the bottom */}
        <Container className="relative z-10 flex flex-col items-center justify-end text-center px-4 pb-4 sm:pb-6 md:pb-8 w-full">
          <div className="bg-transparent md:p-8 rounded-lg">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl md:mb-2">
              <Balancer>Efficient</Balancer>
            </h1>
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl">
              <Balancer>Quality Control</Balancer>
            </h1>
          </div>
        </Container>
      </div>
    </Section>
  );
}