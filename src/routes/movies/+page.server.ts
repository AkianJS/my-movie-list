import { error } from "@sveltejs/kit";
import getMovies from "../../api/getMovies";
import type { MovieInterface } from "../../interface/Movie";
import type { PageServerLoad } from "./$types";

export const load = (async ({ url }) => {
  const query = url.searchParams.get("query") || "";
  const page = url.searchParams.get("page") || "";
  const movies:MovieInterface =
    query !== ""
      ? await getMovies(`/search/movie?page=1&query=${query}`)
      : await getMovies(`/discover/movie?page=${page}`);

  if (movies) {
    return { movies };
  }

  throw error(404, "Servidor caído");
}) satisfies PageServerLoad;
