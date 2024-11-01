import Image from "next/image";
import Placeholder from "@/public/placeholder.webp";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h2 className="!my-0 font-bold text-3xl md:text-4xl">Our Services</h2>
        <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[28rem] md:grid-cols-6 gap-1 md:gap-3">
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
    header: <Images image={Placeholder.src} />,
    className: "md:col-span-4",
  },
  {
    title: "Farm Tankers",
    header: <Images image={Placeholder.src} />,
    className: "md:col-span-2",
  },
  {
    title: "Aviation Fuel Handling",
    header: <Images image={Placeholder.src} />,
    className: "md:col-span-2",
  },
  {
    title: "Pipeline Installation",
    header: <Images image={Placeholder.src} />,
    className: "md:col-span-4",
  },
  {
    title: "Building Construction",
    header: <Images image={Placeholder.src} />,
    className: "md:col-span-3",
  },
  {
    title: "Fuel Bowser Sales/Retrofit",
    header: <Images image={Placeholder.src} />,
    className: "md:col-span-3",
  }
];