import { createSignal } from "solid-js";
import lineSvg from "../../assets/line.svg";
import "./burger.css";

export const BurgerBtn = (props) => {
  const toggle = () => props.setCurrent(!props.current());
  return (
    <button
      // Вынесла стили в отдельный файл, т.к. писать здесь портянку стилей очень неудобно
      class={props.current() ? "burger burger_open" : "burger "}
      onClick={toggle}
    >
      <For each={Array.from({ length: 3 })}>
        {(i) => (
          <img
            src={lineSvg}
            alt={props.current() ? "Закрыть меню" : "Открыть меню"}
          />
        )}
      </For>
    </button>
  );
};
