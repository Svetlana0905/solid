import { Sidebar } from "../../components/sidebar/Sidebar";
import { Slider } from "../../components/slider/Slider";
import { HomePageContent } from "./HomePageContent";

export const HomePage = () => {
  return (
    <>
      <Sidebar />
      <HomePageContent />
      <Slider />
    </>
  );
};
