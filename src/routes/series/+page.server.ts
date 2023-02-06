import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import getMovies from "../../api/getMovies";
import type { SeriesInterface } from "../../interface/Serie";

export const load: PageServerLoad = (async () => {
    const series:SeriesInterface = await getMovies("/discover/tv")

    if (series) {
        return {
            series
        }
    }

    throw error(404, "No se puede cargar la página")
})satisfies PageServerLoad