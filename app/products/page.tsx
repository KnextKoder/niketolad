import Footer from "@/components/custom/footer";
import { NavBar } from "@/components/navbar";
import { Accessories } from "@/components/product-components/accessories";
import { FilterElements } from "@/components/product-components/filter-elements";
import Hero from "@/components/product-components/hero";
import { WaterSeparator } from "@/components/product-components/water-separator";

export default function Products() {
  return (
    <div className="m-0 p-0 w-screen flex flex-col">
      <NavBar />
      <Hero/>
      <WaterSeparator/>
      <FilterElements/>
      <Accessories/>
      <Footer/>
    </div>
  )
}
