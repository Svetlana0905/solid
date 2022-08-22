import { For, Show } from "solid-js";
import { store, userId } from "../../redux/stor";

export const UserList = () => {
  return (
    <>
      <Show
        when={userId() > 0}
        fallback={
          <For each={store.usersdata.results}>
            {(item) => (
              <div class="flex flex-col pt-2">
                <p class=" text-slate-400">
                  Имя - <span class=" text-text-dark">{item.name}</span>
                </p>
                <p class="mb-2 text-slate-400">
                  Pocт - <span class=" text-text-dark">{item.height}</span>
                </p>
              </div>
            )}
          </For>
        }
      >
        <p class="text-slate-400 ">
          Имя - <span class=" text-text-dark">{store.usersdata.name}</span>
        </p>
      </Show>
    </>
  );
};
