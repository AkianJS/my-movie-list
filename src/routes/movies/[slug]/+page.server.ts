import { error } from "@sveltejs/kit";
import getMovies from "../../../api/getMovies";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ params }) => {
  const movie = await getMovies("/movie/" + params.slug);
  const images = await getMovies(`/movie/${params.slug}/images?language=en`);

  if (movie) {
    return {
      movie,
      images,
    };
  } else {
    throw error(404, "No se puede encontrar la página");
  }
}) satisfies PageServerLoad;


