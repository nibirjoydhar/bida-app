import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/services";
import Statistics from "../components/statistics";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services"><Services /></div>
      <div id="statistics"><Statistics /></div>
      <div id="dashboard"><Dashboard /></div>
    </>
  );
}
