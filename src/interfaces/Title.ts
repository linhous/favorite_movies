export interface ITitle {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export interface ITitles {
  searchType: string;
  expression: string;
  results: ITitle[];
  errorMessage: string;
}
