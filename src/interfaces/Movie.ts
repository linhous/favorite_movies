export interface IMovie {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export interface IMovies {
  searchType: string;
  expression: string;
  results: IMovie[];
  errorMessage: string;
}

interface IActors {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

interface ISimilar {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
}

export interface IMovieDetails {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  plot: string;
  actorList: IActors[];
  genres: string;
  imDbRating: string;
  similars: ISimilar[];
}
