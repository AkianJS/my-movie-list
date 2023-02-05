import { error } from "@sveltejs/kit";
import getMovies from "../api/getMovies";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async () => {
  const movies = await getMovies("/discover/movie")
  const series = await getMovies("/discover/tv")

  if (movies) {
    return {
      movies,
      series
    }
  }

  throw error(404, "Servidor caído");
}) satisfies PageServerLoad;
