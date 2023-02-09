import { error } from "@sveltejs/kit";
import getMovies from "../api/getMovies";
import type { MovieInterface } from "../interface/Movie";
import type { SeriesInterface } from "../interface/Serie";
import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = (async () => {
  const movies: MovieInterface = await getMovies("/discover/movie?language=es&sort_by=revenue.desc");
  const series: SeriesInterface = await getMovies("/discover/tv?language=es&sort_by=vote_average.desc");
  const upcoming: MovieInterface = await getMovies("/movie/upcoming");
  const backdrops = upcoming.results
    .filter((item) => item.backdrop_path !== null)
    .map((item) => ({
      src: "https://image.tmdb.org/t/p/original" + item.backdrop_path,
      title: item.title,
    }));

  if (movies) {
    return {
      movies,
      series,
      backdrops,
      animation: false
    };
  }

  throw error(404, "Servidor caído");
}) satisfies PageServerLoad;
