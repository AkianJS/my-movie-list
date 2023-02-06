import { error } from "@sveltejs/kit";
import getMovies from "../../../api/getMovies";
import type { ImageInterface } from "../../../interface/Images";
import type { Movie } from "../../../interface/Movie";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ params }) => {
  const movie: Movie = await getMovies(
    "/movie/" + params.slug + "?language=es"
  );
  const images: ImageInterface = await getMovies(
    `/movie/${params.slug}/images`
  );

  if (movie) {
    return {
      movie,
      images,
    };
  } else {
    throw error(404, "No se puede encontrar la página");
  }
}) satisfies PageServerLoad;
