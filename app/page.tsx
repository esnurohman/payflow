import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "./Hero";
import StatSection from "./Stat";
import FeatureSection from "./Feature";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatSection />
      <FeatureSection />
    </>
  );
}
