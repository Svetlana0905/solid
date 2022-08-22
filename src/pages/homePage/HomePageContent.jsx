import { Link } from "@solidjs/router";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { LinkBtn } from "../../components/ui/links";

export const HomePageContent = () => {
  return (
    <section class="bg-gray-50 flex flex-col w-full md:w-4/5 lg:w-6/12 shrink-0 justify-between px-6">
      <Header />
      <div class="flex flex-col shrink-0 pb-134px">
        <h1 class="font-serif text-5xl md:text-7xl font-bold tracking-tight text-text-dark">
          Каршеринг
        </h1>
        <br />
        <h3 class="mb-4 font-serif text-5xl md:text-7xl font-bold tracking-tight text-my-green">
          Need for drive
        </h3>
        <p class="text-slate-400 md:text-2xl mb-16">
          Поминутная аренда авто твоего города
        </p>
        <LinkBtn link="/about" text="Забронировать" />
      </div>
      <Footer />
    </section>
  );
};
