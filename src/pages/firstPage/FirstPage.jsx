import { onMount, For } from "solid-js";
import { createSignal } from "solid-js";
import { Sidebar } from "../../components/sidebar/Sidebar";

const [breweryList, setBreweryList] = createSignal([]);
const fetchBreweries = () => {
  const apiUrl = "https://api.openbrewerydb.org/breweries/";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      setBreweryList(data);
    });
};
onMount(() => {
  fetchBreweries();
});

export const FirstPage = () => {
  return (
    <div class="bg-gray-50 min-h-screen w-full ">
      <Sidebar />
      <h1 class="text-3xl text-red-400 text-center py-6">List of Breweries</h1>
      <ul class="container mx-auto pb-10 grid grid-cols-4 gap-10">
        <For each={breweryList()}>
          {(list) => (
            <li class="bg-white p-4">
              <span class="inline-block mb-2 text-lg font-bold">
                {list.name}
              </span>
              <span class="inline-block mb-2">Country: {list.country}</span>
              <span class="inline-block mb-2">City: {list.city}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
