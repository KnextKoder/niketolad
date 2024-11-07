import { Section } from "@/components/craft";
import Image from "next/image";
import Placeholder from "@/public/Nikentolad Logos/Nikentolad group.png";
import Balancer from "react-wrap-balancer";

export const About = () => {
  return (
    <Section className="w-screen py-8 md:py-12 bg-gradient-to-r from-slate-50 to-niketolad/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <div className="w-full flex justify-start items-center">
              <h1 className="text-3xl font-bold mb-4">About Us</h1>
            </div>
            <div className="text-lg leading-relaxed space-y-5">
              <Balancer>
                Nikentolad Group was established and incorporated in Nigeria in 2016, following the expansion of the company to include Nikentolad Energy Limited and Nikentolad Farms Limited. These new ventures were added to complement the already existing Nikentolad Nigeria Limited, which has been opeerational since its founding in 2005. 
              </Balancer>
              <Balancer>
                The addition of these new companies was driven by a strategic vision to diversify the Group&apos;s business portfolio and braden its impact across key sectors of the Nigerian economy. By venturing into renewable energy through Nikentolad Energy Limited and sustainable agriculture with Nikentolad Farms Limited, the company aims to contribute meaningfully to national development.
              </Balancer>
            </div>
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