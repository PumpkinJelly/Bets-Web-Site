import AboutUs from "@/components/AboutUs";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import InfoBlock from "@/components/InfoBlock";
import Offerings from "@/components/Offerings";
import Partners from "@/components/Partners";
import { useInfoBlocks } from "@/content/info";

export default function Home() {
  const { halykLiga, highlights } = useInfoBlocks();

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

