import AboutSection from "@/components/AboutSection";
import Problems from "@/components/Problems";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import Head from "next/head";
import EcosystemSection from "@/components/EcosystemSection";
import EcosystemSectionTwo from "@/components/EcosystemSectionTwo";
import EcosystemThree from "@/components/EcosystemThree";
import Roadmap from "@/components/Roadmap";
import Divider from "@/components/Divider";
import EcosystemHead from "@/components/EcosystemHead";
import EcosystemCommerce from "@/components/EcosystemCommerce";

export default function Home() {
  return (
    <>
      <Head>
        <title>RawBlock Ecosystem</title>
        <meta
          name="description"
          content="Rawblock is a project that adapts various Web2 systems to the Web3 infrastructure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <AboutSection />
      <Divider />
      <Problems />
      <Divider />

      <EcosystemHead />
      <EcosystemCommerce />
      <EcosystemSection />
      <EcosystemSectionTwo />
      <EcosystemThree />
      <Roadmap />
      <TeamSection />
      <Footer />
    </>
  );
}
