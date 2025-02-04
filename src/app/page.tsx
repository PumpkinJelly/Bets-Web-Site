import AboutUs from "@/components/AboutUs";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import InfoBlock from "@/components/InfoBlock";
import Offerings from "@/components/Offerings";
import Partners from "@/components/Partners";
import { halykLiga, highlights } from "@/content/info";

export default function Home() {

  return (
    <>
      <Hero />
      <Events />
      <AboutUs />
      <Offerings />
      <InfoBlock {...highlights} />
      <Partners />
      <InfoBlock {...halykLiga} />
    </>
  );
}

