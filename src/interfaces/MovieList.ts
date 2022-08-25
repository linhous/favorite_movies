import { ITitle } from "./Title";

export interface ILMovie {
  id: string;
  image: string;
  title: string;
  order: number;
  seen: boolean;
}

export interface IStoreMovies {
  list: {
    id: string;
    image: string;
    title: string;
    order: number;
    seen: boolean;
  }[];
  set: {
    add: (payload: ITitle) => void;
    toggle: (id: string) => void;
    remove: (id: string) => void;
  };
  get: {
    seen: () => {
      id: string;
      image: string;
      title: string;
      order: number;
      seen: boolean;
    }[];
    unseen: () => {
      id: string;
      image: string;
      title: string;
      order: number;
      seen: boolean;
    }[];
  };
}
