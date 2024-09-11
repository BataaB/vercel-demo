import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recommended from "@/components/Recommended";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <Recommended />
      <Footer />
    </>
  );
}

export default Home;