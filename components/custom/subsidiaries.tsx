"use client"
import Image from "next/image";
import { Container, Section } from "../craft";
import { motion } from "framer-motion";
import FarmLogo from "@/public/Nikentolad Logos/niketolad farms logo.png"
import EnergyLogo from "@/public/Nikentolad Logos/Nikentolad Energy logo.png"
import NigeriaLogo from "@/public/Nikentolad Logos/Nikentolad Nigeria limited logo.png"
import HydroWell from '@/public/nikentolad-projects/hydrowells logo.png'
import Properties from '@/public/nikentolad-projects/nikentolad properties.png'
import Nikenando from '@/public/nikentolad-projects/Nikenando Energy.png'

interface SubsidiaryCardProps {
  header: string;
  description: string;
  image: string;
  delay?: number;
}

// Unified card component with animations
const SubsidiaryCard = ({ header, description, image, delay = 0 }: SubsidiaryCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: delay }}
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    className="relative flex flex-col rounded-lg border p-6 bg-niketolad text-white shadow-lg h-full"
  >
    <div 
      className="absolute -top-12 left-1/2 transform -translate-x-1/2"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200 flex items-center justify-center">
        <Image 
          src={image} 
          alt={header} 
          className="w-full h-full object-contain p-2" 
          width={96} 
          height={96} 
        />
      </div>
    </div>
    <div className="mt-16 text-center">
      <motion.h4 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
        className="mb-3 mt-4 text-xl md:text-2xl font-semibold"
      >
        {header}
      </motion.h4>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
        className="text-sm md:text-base opacity-80"
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

const GreenSubsidiaryCard = ({ header, description, image, delay = 0 }: SubsidiaryCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: delay }}
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    className="relative flex flex-col rounded-lg border p-6 bg-niketolad text-white shadow-lg h-full"
  >
    <div 
      className="absolute -top-12 left-1/2 transform -translate-x-1/2"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-green-900 flex items-center justify-center">
        <Image 
          src={image} 
          alt={header} 
          className="w-full h-full object-contain" 
          width={96} 
          height={96} 
        />
      </div>
    </div>
    <div className="mt-16 text-center">
      <motion.h4 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
        className="mb-3 mt-4 text-xl md:text-2xl font-semibold"
      >
        {header}
      </motion.h4>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
        className="text-sm md:text-base opacity-80"
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

const GreenSubsidiariesData = [
  {
    header: "Nikentolad Farms Limited",
    description: "Nikentolad Farms Limited was established and incorporated in Nigeria in the year 2016 with RC 1377435. The company is into the production of farm products.",
    image: FarmLogo,
  },
  {
    header: "Nikentolad Energy Limited",
    description: "Nikentolad Energy Limited was established and incorporated in the year 2016 with RC 1377432. The company is into generation of electriciy through the use of renewable energy solutions, working in conjunction with distribution companies to end shortage of electricity in the country.",
    image: EnergyLogo,
  },
  {
    header: "Nikentolad Nigeria Limited",
    description: "Nikentolad Nigeria Limited was established and incorporated in the year 2005 with RC 633721. The company has expertice in the areas of: Procurement, General Aviation, Fuel Handling and Fuel Facilities Business, Engineering, Technical Support, Services, Logistics/Supply Chain and Brand Management, Construction, Consultancy and Advisory Services to the aviation industry, Oil & Gas Companies, Manufacturing Companies, the military, Governmental Agenies and Parastatals.",
    image: NigeriaLogo,
  },
];
const subsidiariesData = [
  {
    header: "Nikentolad Properties Limited",
    description: "Nikentolad Properties Limited offers luxurious accommodations and exceptional service. Our elegantly designed rooms and suites provide the perfect retreat for business travelers and leisure guests alike.",
    image: Properties,
  },
  {
    header: "HydroWells Water",
    description: "Hydrowell table water is committed to providing the purest, most refreshing water. Our water is meticulously filtered and bottled to ensure the highest quality. Every sip is a taste of nature's perfection.",
    image: HydroWell,
  },
  {
    header: "Nikenando Energy Limited",
    description: "Nikenando Energy Limited was established and incorporated in 2017 UNDER THE COMPANIES AND ALLIED MATTERS ACT 1990 and the company is limited by shares.",
    image: Nikenando,
  }
];

const Subsidiaries = () => {
  return (
    <Section id="subsidiary" className="py-16 md:py-24">
      <Container className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center mb-16"
        >
          <motion.h2 
            className="font-bold text-3xl md:text-4xl lg:text-5xl"
            whileInView={{ 
              scale: [1, 1.05, 1],
              transition: { duration: 1, ease: "easeInOut" }
            }}
            viewport={{ once: true }}
          >
            Our Subsidiaries
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-niketolad rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-y-16 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {GreenSubsidiariesData.map((subsidiary, index) => (
            <GreenSubsidiaryCard
              key={index}
              header={subsidiary.header}
              description={subsidiary.description}
              image={subsidiary.image.src}
              delay={index * 0.15}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-y-16 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {subsidiariesData.map((subsidiary, index) => (
            <SubsidiaryCard
              key={index}
              header={subsidiary.header}
              description={subsidiary.description}
              image={subsidiary.image.src}
              delay={index * 0.15}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Subsidiaries;