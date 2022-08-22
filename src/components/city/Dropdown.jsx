import { createSignal } from "solid-js";
import { MyInput } from "../ui/fields";

export const Dropdown = (props) => {
  const [isVisible, setIsVisible] = createSignal(false);
  return (
    <div class="relative mb-10">
      <MyInput
        onClick={() => setIsVisible(true)}
        handleChenge={props.getInputText}
        value={props.textInput()}
        type="text"
        labelText={props.labelText}
        onBlur={() => setTimeout(() => setIsVisible(false), 500)}
      />
      <ul class="absolute w-full border rounded-sm border-stone-100 z-50">
        <Show
          when={isVisible()}
          fallback={<span class=" text-slate-300 ">-</span>}
        >
          <For each={props.data}>
            {(item) => (
              <li
                onClick={(e) => {
                  props.getInputText(item.name);
                  setTimeout(() => setIsVisible(false), 1000);
                }}
                class="cursor-pointer bg-white hover:bg-slate-100  py-1 px-2"
              >
                {item.name}
              </li>
            )}
          </For>
        </Show>
        {/* <Switch fallback={<span class=" text-slate-300 ">-</span>}>
          <Match when={props.data && isVisible()}>
            <For each={props.data}>
              {(item) => (
                <li
                  onClick={(e) => {
                    props.getInputText(item.name);
                    setTimeout(() => setIsVisible(false), 1000);
                  }}
                  class="cursor-pointer bg-white hover:bg-slate-100  py-1 px-2"
                >
                  {item.name}
                </li>
              )}
            </For>
          </Match>
          <Match when={props.data.length}>
            <p>No</p>
          </Match>
        </Switch> */}
      </ul>
    </div>
  );
};
