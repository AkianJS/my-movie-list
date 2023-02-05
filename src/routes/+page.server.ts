import { error } from "@sveltejs/kit";
import getMovies from "../api/getMovies";
import type { MovieInterface } from "../interface/Movie";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async () => {
  const movies: MovieInterface = await getMovies("/discover/movie?language=es");
  const series: MovieInterface = await getMovies("/discover/tv?language=es");
  const upcoming: MovieInterface = await getMovies("/movie/upcoming");
  const backdrops = upcoming.results
    .filter((item) => item.backdrop_path !== null)
    .map((item) => ({
      src: "https://image.tmdb.org/t/p/original" + item.backdrop_path,
      title: item.name ?? item.title,
    }));

  if (movies) {
    return {
      movies,
      series,
      backdrops,
    };
  }

  throw error(404, "Servidor caído");
}) satisfies PageServerLoad;
