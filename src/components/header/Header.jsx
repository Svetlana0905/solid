import mapSvg from "../../assets/map.svg";
export const Header = () => {
  return (
    <header class="bg-gray-70 flex flex-col items-end md:flex-row md:justify-between content-center pt-4 ">
      <a class="text-2xl md:text-3xl font-bold text-my-green" href="/">
        Need for drive
      </a>
      <p class="flex gap-x-2 md:self-center">
        <a class="" href="/">
          <img src={mapSvg} alt="Ссылка на карту" />
        </a>
        <span class="text-sm">Ульяновск</span>
      </p>
    </header>
  );
};
