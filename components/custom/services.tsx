import Image from "next/image";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-l from-slate-50 to-niketolad/60 py-8" id="services">
        <h2 className="font-bold text-3xl md:text-4xl my-4">Our Services</h2>
        <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[28rem] md:grid-cols-6 gap-3 md:gap-3 px-4">
        {items.map((item, i) => (
            <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            className={item.className}
            />
            ))}
        </BentoGrid>
    </div>
  );
};

const Images = ({ image }: { image: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent">
    <Image
      src={image}
      alt=""
      width={500}
      height={100}
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
);

const items = [
  {
    title: "Farm Tanks",
    header: <Images image={'/product-images/tank farms site.jpeg'} />,
    className: "md:col-span-4",
  },
  {
    title: "Sales of Quality Control Equipments",
    header: <Images image={'/product-images/sales of qc euipment.JPG'} />,
    className: "md:col-span-2",
  },
  {
    title: "Aviation Fuel Handling",
    header: <Images image={'/product-images/Aviation fuel Handling.png'} />,
    className: "md:col-span-2",
  },
  {
    title: "Pipeline Installation",
    header: <Images image={'/product-images/pipeline installation.jpeg'} />,
    className: "md:col-span-4",
  },
  {
    title: "Building Construction",
    header: <Images image={'/product-images/Building construction1.jpeg'} />,
    className: "md:col-span-3",
  },
  {
    title: "Fuel Bowser Sales/Retrofit",
    header: <Images image={'/product-images/Fuel Bowser Sales.jpeg'} />,
    className: "md:col-span-3",
  }
];