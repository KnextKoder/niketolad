import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import Placeholder from "@/public/Nikentolad Logos/Efficient quality control background.png";
// import Placeholder from '@/public/nikentolad-projects/WhatsApp Image 2024-11-16 at 17.01.41_3fff536b.jpg'
// import Placeholder from '@/public/nikentolad-projects/farm tank1.png'

export default function Hero() {
  return (
    <Section className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
      <div className="flex items-center justify-center h-full w-9/12">
        <Image
          className="absolute inset-0 h-full w-full object-fit"
          src={Placeholder}
          width={809}
          height={1080}
          alt="hero image"
          placeholder="blur"
        />
        <Container className="relative z-10 flex h-full items-end justify-center pb-8 text-center">
          <div className="bg-transparent p-4 rounded-lg mb-8">
            <h1 className="text-white text-3xl md:text-6xl">
              <Balancer>Efficient</Balancer>
            </h1>
            <h1 className="text-white font-bold text-5xl md:text-8xl">
              <Balancer>Quality Control</Balancer>
            </h1>
          </div>
        </Container>
      </div>
    </Section>
  );
}