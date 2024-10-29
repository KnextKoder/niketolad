import { Section } from "@/components/craft";
import Image from "next/image";
import Placeholder from "@/public/placeholder.webp";
import Balancer from "react-wrap-balancer";

export const About = () => {
  return (
    <Section className="w-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <div className="w-full flex justify-start items-center">
              <h1 className="text-3xl font-bold mb-4">About Us</h1>
            </div>
            <p className="text-lg leading-relaxed">
              <Balancer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Balancer>
            </p>
          </div>
          <div className="md:w-1/2 lg:w-1/3 flex justify-center items-center">
            <Image
              className="not-prose object-cover object-bottom rounded-lg"
              src={Placeholder}
              width={350}
              height={350}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};