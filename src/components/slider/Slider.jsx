import { sliderData } from "../../data/SliderData";
import arrowSvg from "../../assets/arrow_slider.svg";
import { createSignal } from "solid-js";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = createSignal(0);
  const dataLenght = sliderData.length;

  const nextSlide = () => {
    slideIndex() !== dataLenght - 1
      ? setSlideIndex(slideIndex() + 1)
      : setSlideIndex(0);
  };

  const prevSlide = () => {
    slideIndex() !== 0
      ? setSlideIndex(slideIndex() - 1)
      : setSlideIndex(dataLenght - 1);
  };

  return (
    <section class="min-h-full relative hidden lg:block">
      <div class="absolute flex flex-row justify-between w-full">
        <button
          class="w-14 text-white min-h-screen flex justify-center hover:bg-greenbg-400/50 z-10"
          onClick={() => prevSlide()}
        >
          <img src={arrowSvg} alt="Предыдущий слайд" class="self-center" />
        </button>
        <button
          class="w-14 text-white min-h-screen flex justify-center hover:bg-greenbg-400/50 z-10"
          onClick={() => nextSlide()}
        >
          <img
            src={arrowSvg}
            alt="Следующий слайд"
            class="rotate-180 self-center"
          />
        </button>
      </div>
      <img
        class="min-h-full brightness-50"
        src={sliderData[slideIndex()].imgpath}
        alt={sliderData[slideIndex()].title}
      />
      <div class="absolute px-16 top-1/2 -translate-y-1/2">
        <h3 class="text-white text-4xl mb-2">
          {sliderData[slideIndex()].title}
        </h3>
        <p class="text-white text-xl">{sliderData[slideIndex()].subtitle}</p>
      </div>
    </section>
  );
};
