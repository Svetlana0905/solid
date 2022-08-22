import { createSignal, createEffect } from "solid-js";
import { Dropdown } from "./Dropdown";
import { city, point } from "../../data/address";

export const Address = () => {
  const [pointCurrent, setCurrentPoint] = createSignal([]);
  const [cityCurrent, setCityCurrent] = createSignal(city);
  const [cityImput, setCityInput] = createSignal("");
  const [pointImput, setPointInput] = createSignal("");

  createEffect(() => {
    console.log(cityImput() + " city");
    console.log(pointImput() + " point");
    console.log(pointCurrent());
  });

  createEffect(() => {
    if (cityImput() && point) {
      setCurrentPoint(
        point.filter((item) => item.cityId && item.cityId.name === cityImput())
      );
    } else setCurrentPoint([]);
  });

  createEffect(() => {
    if (cityImput()) {
      setCityCurrent(city.filter((item) => item.name === cityImput()));
    } else setCityCurrent(city);
  });

  createEffect(() => {
    if (!cityImput()) {
      setPointInput("");
    }
  });

  return (
    <>
      <Dropdown
        data={cityCurrent()}
        getInputText={setCityInput}
        textInput={cityImput}
        labelText="Город"
      />
      <Dropdown
        data={pointCurrent()}
        getInputText={setPointInput}
        textInput={pointImput}
        labelText="Адрес"
      />
    </>
  );
};
