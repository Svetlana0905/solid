import { createSignal, createEffect } from "solid-js";
import { Address } from "../../components/city/Address";
import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { SmallBtn } from "../../components/ui/buttons";
import { MyInput } from "../../components/ui/fields";
import { UserList } from "../../components/userList/UserList";
import { setUserId } from "../../redux/stor";

export const AboutPage = () => {
  const [name, setName] = createSignal("");
  const [lastName, setLasttName] = createSignal("");
  const [userId, setId] = createSignal("");
  const [data, setData] = createSignal([]);

  const getData = (e) => {
    setData({
      firstName: name(),
      lasttName: lastName(),
    });
  };
  createEffect(() => {
    setUserId(userId());
  });

  return (
    <>
      <Sidebar />
      <div class=" w-full px-6">
        <Header />
        <section class="w-full pt-14 flex flex-col gap-x-16 md:flex-row">
          <div class="flex flex-col gap-3">
            <MyInput
              handleChenge={setName}
              value={name()}
              type="text"
              labelText="Первое значение"
            />
            <MyInput
              handleChenge={setLasttName}
              value={lastName()}
              type="text"
              labelText="Второе значение"
            />
            <SmallBtn text="Send" click={getData()} />
            <p class="text-text-dark">{data().firstName}</p>
            <p class="text-text-dark">{data().lasttName}</p>
            <div>
              <Address />
            </div>
          </div>
          <div class="flex flex-col gap-x-16">
            <MyInput
              handleChenge={setId}
              value={userId()}
              type="number"
              min="1"
              labelText="Номер Id"
            />
            <UserList />
          </div>
        </section>
      </div>
    </>
  );
};
