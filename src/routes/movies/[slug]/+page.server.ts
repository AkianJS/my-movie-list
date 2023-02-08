import { error } from "@sveltejs/kit";
import getMovies from "../../../api/getMovies";
import type { ImageInterface } from "../../../interface/Images";
import type { Movie } from "../../../interface/Movie";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ params }) => {
  let movie: Movie = await getMovies(
    `/movie/${params.slug}?language=es`
  );

  if (movie.overview === '') {
    movie = await getMovies(
      `/movie/${params.slug}`
    );
  }

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
