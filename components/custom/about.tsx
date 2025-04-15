"use client";
import { Section } from "@/components/craft";
import Image from "next/image";
import Placeholder from "@/public/Nikentolad Logos/Nikentolad group.png";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <Section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-50 to-niketolad/40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <motion.div 
              className="w-full flex justify-start items-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold relative">
                About Us
                <motion.div 
                  className="h-1 w-16 md:w-24 bg-niketolad rounded-full mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </h1>
            </motion.div>
            
            <div className="text-sm md:text-base lg:text-lg leading-relaxed space-y-6 text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Balancer>
                  Nikentolad Group was established and incorporated in Nigeria in 2016, following the expansion of the company to include Nikentolad Energy Limited and Nikentolad Farms Limited. These new ventures were added to complement the already existing Nikentolad Nigeria Limited, which has been operational since its founding in 2005.
                </Balancer>
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Balancer>
                  The addition of these new companies was driven by a strategic vision to diversify the Group&apos;s business portfolio and broaden its impact across key sectors of the Nigerian economy. By venturing into renewable energy through Nikentolad Energy Limited and sustainable agriculture with Nikentolad Farms Limited, the company aims to contribute meaningfully to national development.
                </Balancer>
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 lg:w-2/5 flex justify-center items-center"
          >
            <div className="relative p-2 bg-white rounded-lg shadow-lg transform rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="absolute inset-0 bg-niketolad/10 rounded-lg -z-10 transform -rotate-6"></div>
              <Image
                className="rounded-lg object-cover object-center z-10"
                src={Placeholder}
                width={450}
                height={450}
                alt="Nikentolad Group"
                placeholder="blur"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};