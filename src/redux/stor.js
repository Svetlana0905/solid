import { createStore } from "solid-js/store";
import { createSignal, createResource } from "solid-js";

const [store, setStore] = createStore({ usersdata: [] });
const [userId, setUserId] = createSignal();

const fetchUsers = (id) => {
  const apiUrl = `https://swapi.dev/api/people/${id}/`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      setStore({ usersdata: data });
      // console.log(data);
    });
};
const [user] = createResource(userId, fetchUsers);

export { store, setUserId, userId, user };
