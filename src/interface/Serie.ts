export interface SeriesInterface {
  page: number;
  results: SeriesResults[];
  total_pages: number
}
export type SeriesResults = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type Serie = {
  adult: boolean;
  backdrop_path: string | null;
  created_by: CreatedBy[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: Networks[];
  number_of_seasons: number;
  number_of_episodes: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  seasons: Seasons[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

type Seasons = {
  air_date: number;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};

type Networks = {
  id: number;
  name: string;
  logo_path: string;
};

type Genre = {
  id: number;
  name: string;
};

type CreatedBy = {
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
};

type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
