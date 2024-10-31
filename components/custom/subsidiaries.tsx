import Image from "next/image";
import { Container, Section } from "../craft";
import FarmLogo from "@/public/Nikentolad Logos/niketolad farms logo.png"
import EnergyLogo from "@/public/Nikentolad Logos/Nikentolad Energy logo.png"
import NigeriaLogo from "@/public/Nikentolad Logos/Nikentolad Nigeria limited logo.png"

interface SubsidiaryCardProps {
  header: string;
  description: string;
  image: string;
}

const FarmsCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl text-primary">{header}</h4>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </div>
);

const NigeriaCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl text-primary">{header}</h4>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </div>
);

const EnergyCard = ({ header, description, image }: SubsidiaryCardProps) => (
  <div className="relative flex flex-col rounded-lg border p-6 bg-white shadow-lg">
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
        <Image src={image} alt={header} className="w-full h-full object-cover" width={96} height={96} />
      </div>
    </div>
    <div className="mt-16 text-center">
      <h4 className="mb-2 mt-4 text-2xl text-primary">{header}</h4>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </div>
);

const Subsidiaries = () => {
  return (
    <Section>
        <div className="bg-gray-100 w-screen flex items-center justify-self-center">
        <Container className="flex flex-col items-center gap-4 text-center">
            <h2 className="!my-0 font-bold text-3xl md:text-4xl">Our Subsidiaries</h2>

            <div className="not-prose mt-14 grid grid-cols-1 gap-12 md:gap-6 md:grid-cols-2">
            <div className="col-span-1 mb-2 md:mb-6">
                <FarmsCard
                    header="Nikentolad Farms Limited"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={FarmLogo.src}
                />
            </div>
            <div className="col-span-1 mb-2 md:mb-6">
                <NigeriaCard
                    header="Nikentolad Energy Limited"
                    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    image={NigeriaLogo.src}
                />
            </div>
            <div className="col-span-1 mt-2 md:col-span-2 md:mt-6">
            <EnergyCard
                header="Nikentolad Nigeria Limited"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                image={EnergyLogo.src}
            />
            </div>
            </div>
        </Container>
        </div>
    </Section>
  );
};

export default Subsidiaries;