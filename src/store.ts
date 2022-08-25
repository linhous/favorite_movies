import { ILMovie } from "./interfaces/MovieList";
import { ref } from "vue";
import { IMovie, IMovieDetails } from "./interfaces/Movie";
import store from "store2";
import { useQuasar } from "quasar";

const useStore = () => {
  let storageList = store.has("movielist") ? store("movielist") : [];
  let searchList = store.has("searchlist") ? store("searchlist") : [];
  let searchTerm = store.has("searchterm") ? store("searchterm") : "";
  const list = ref<ILMovie[]>(storageList);
  const $q = useQuasar();

  const add = (payload: IMovie | IMovieDetails) => {
    const exist = list.value.filter((mv) => mv.id === payload.id).length > 0;

    if (!exist) {
      const movie: ILMovie = {
        ...payload,
        order: list.value.length + 1,
        seen: false,
      };
      list.value.push(movie);
      store("movielist", list.value);

      $q.notify({
        type: "positive",
        message: "Título adicionado com sucesso!",
      });
    } else {
      $q.notify({
        type: "negative",
        message: "Esse título já está em sua lista de favoritos!",
      });
    }
  };

  const toggle = (id: string) => {
    list.value
      .filter((mv) => mv.id === id)
      .forEach((mv) => (mv.seen = !mv.seen));
    store("movielist", list.value);
    $q.notify({
      type: "positive",
      message: "Status alterado com sucesso!",
    });
  };

  const remove = (id: string) => {
    list.value = list.value.filter((mv) => mv.id !== id);
    store("movielist", list.value);
    $q.notify({
      type: "positive",
      message: "Título apagado   com sucesso!",
    });
  };

  const updateSearchTerm = (payload: string) => {
    searchTerm = payload;
    store("searchterm", searchTerm);
  };

  const updateSearchList = (payload: IMovie[]) => {
    searchList = payload;
    store("searchlist", searchList);
  };

  return {
    list: list.value,
    searchList: searchList,
    searchTerm: searchTerm,
    set: {
      add,
      toggle,
      remove,
      updateSearchTerm,
      updateSearchList,
    },
    get: {
      seen: () => list.value.filter((mv) => mv.seen),
      unseen: () => list.value.filter((mv) => !mv.seen),
    },
  };
};

export default useStore;
