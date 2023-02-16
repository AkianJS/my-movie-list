import { error } from "@sveltejs/kit";
import getMovies from "../../../api/getMovies";
import type { ImageInterface } from "../../../interface/Images";
import type { MovieDetail } from "../../../interface/Movie";
import type { PageServerLoad } from "./$types";

type VideosType = {
  results: {
    type:string
    site: string
    key: string
  }[]
}

export const load: PageServerLoad = (async ({ params }) => {
  let movie: MovieDetail = await getMovies(
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

  const videos:VideosType = await getMovies(`/movie/${params.slug}/videos`)

  if (movie) {
    return {
      movie,
      images,
      videos
    };
  } else {
    throw error(404, "No se puede encontrar la página");
  }
}) satisfies PageServerLoad;
