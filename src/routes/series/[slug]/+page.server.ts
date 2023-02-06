import { error } from "@sveltejs/kit";
import getMovies from "../../../api/getMovies";
import type { ImageInterface } from "../../../interface/Images";
import type { Serie } from "../../../interface/Serie";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ params }) => {
  const serie: Serie = await getMovies(
    `/tv/${params.slug}?language=es`
  );
  const images: ImageInterface = await getMovies(
    `/tv/${params.slug}/images?language=es`
  );

  if (serie) {
    return {
      serie,
      images,
    };
  }
  throw error(404, "No se pudo encontrar la página");
}) satisfies PageServerLoad;
