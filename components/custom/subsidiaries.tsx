import Image from "next/image";
import { Container, Section } from "../craft";
import FarmLogo from "@/public/Nikentolad Logos/niketolad farms logo.png"
import EnergyLogo from "@/public/Nikentolad Logos/Nikentolad Energy logo.png"
import NigeriaLogo from "@/public/Nikentolad Logos/Nikentolad Nigeria limited logo.png"
import Placeholder from "@/public/placeholder.webp"

interface SubsidiaryCardProps {
  header: string;
  description: string;
  image: string;
}

const FarmsCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-niketolad text-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl">{header}</h4>
      <p className="text-sm opacity-70 mb-10">{description}</p>
    </div>
  </div>
);

const NigeriaCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-niketolad text-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl ">{header}</h4>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </div>
);

const EnergyCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-niketolad text-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl">{header}</h4>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </div>
);
const HydrowellCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-niketolad text-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl">{header}</h4>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </div>
);
const NikentoladPropertiesCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-niketolad text-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl">{header}</h4>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </div>
);
const NikenandoEnergyCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-niketolad text-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl">{header}</h4>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </div>
);

const Subsidiaries = () => {
  return (
    <Section id="subsidiary">
        <div className="w-screen flex items-center justify-self-center">
        <Container className="flex flex-col items-center gap-4 text-center">
            <h2 className="!my-0 font-bold text-3xl md:text-4xl">Our Subsidiaries</h2>

            <div className="not-prose mt-14 grid grid-cols-1 gap-12 md:gap-6 md:grid-cols-2">
            <div className="col-span-1 mb-2 md:mb-6">
                <FarmsCard
                  header="Nikentolad Farms Limited"
                  description="Nikentolad Farms Limited was established and incorporated in Nigeria in the year 2016 with RC 1377435. The company is into the production of farm products."
                  image={FarmLogo.src}
                />
            </div>
            <div className="col-span-1 mb-2 md:mb-6">
                <NigeriaCard
                  header="Nikentolad Energy Limited"
                  description="Nikentolad Energy Limited was established and incorporated in the year 2016 with RC 1377432. The company is into generation of electriciy through the use of renewable energy solutions, working in conjunction with distribution companies to end shortage of electricity in the country."
                  image={NigeriaLogo.src}
                />
            </div>
            <div className="col-span-1 mt-2 md:col-span-2 md:mt-6">
            <EnergyCard
              header="Nikentolad Nigeria Limited"
              description="Nikentolad Nigeria Limited was established and incorporated in the year 2005 with RC 633721. The company has expertice in the areas of: Procurement, General Aviation, Fuel Handling and Fuel Facilities Business, Engineering, Technical Support, Services, Logistics/Supply Chain and Brand Management, Construction, Consultancy and Advisory Services to the aviation industry, Oil & Gas Companies, Manufacturing Companies, the military, Governmental Agenies and Parastatals."
              image={EnergyLogo.src}
            />
            </div>
            <div className="col-span-1 mb-2 md:mb-6 mt-2 md:mt-6">
            <NikentoladPropertiesCard
              header="Nikentolad Properties Limited"
              description="Nikentolad Properties Limited offers luxurious accommodations and exceptional service. Our elegantly designed rooms and suites provide the perfect retreat for business travelers and leisure guests alike."
              image={Placeholder.src}
            />
            </div>
            <div className="col-span-1 mb-2 md:mb-6 mt-2 md:mt-6">
            <HydrowellCard
              header="HydroWells Water"
              description="Hydrowell table water is committed to providing the purest, most refreshing water.  Our water is meticulously filtered and bottled to ensure the highest quality. Every sip is a taste of nature's perfection."
              image={Placeholder.src}
            />
            </div>
            <div className="col-span-1 mt-2 md:col-span-2 md:mt-6">
            <NikenandoEnergyCard
              header="Nikenando Energy Limited"
              description="Nikenando Energy Limited was established and incorporated in 2017 UNDER THE COMPANIES AND ALLIED MATTERS ACT 1990 and the company is limited by shares."
              image={Placeholder.src}
            />
            </div>
            </div>
        </Container>
        </div>
    </Section>
  );
};

export default Subsidiaries;