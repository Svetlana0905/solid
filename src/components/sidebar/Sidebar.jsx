import { createSignal } from "solid-js";
import { Link } from "@solidjs/router";
import { navLink } from "../../data/navLink";
import { BurgerBtn } from "../burgerBtn/BurgerBtn";

export const Sidebar = () => {
  const [current, setCurrent] = createSignal(false);
  return (
    <aside
      class={
        current()
          ? "absolute min-h-screen w-full bg-neutral-900 opacity-95 transition-all ease-in-out delay-300 z-40"
          : "absolute md:static w-auto bg-neutral-900 transition-all ease-in-out delay-300"
      }
    >
      <div class="py-4 px-2">
        <BurgerBtn current={current} setCurrent={setCurrent} />
        <nav
          class={
            current()
              ? "opacity-100 flex flex-col place-items-center gap-8 "
              : " opacity-0 hidden"
          }
        >
          <For each={navLink}>
            {(item, i) => (
              <Link href={item.link} class="text-white text-2xl">
                {item.title}
              </Link>
            )}
          </For>
        </nav>
      </div>
    </aside>
  );
};
