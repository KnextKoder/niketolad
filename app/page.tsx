import { About } from "@/components/custom/about";
import { Clients } from "@/components/custom/clients";
import Footer from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import { Services } from "@/components/custom/services";
import Subsidiaries from "@/components/custom/subsidiaries";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="m-0 p-0 w-screen flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Subsidiaries/>
      <Services/>
      <Clients/>
      <Footer/>
    </div>
  );
}