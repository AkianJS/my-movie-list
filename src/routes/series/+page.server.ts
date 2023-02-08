import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import getMovies from "../../api/getMovies";
import type { SeriesInterface } from "../../interface/Serie";

export const load: PageServerLoad = (async ({url}) => {
    const page = url.searchParams.get("page")
    const series:SeriesInterface = await getMovies(`/discover/tv?language=es&page=${page}`)

    if (series) {
        return {
            series, animation: false
        }
    }

    throw error(404, "No se puede cargar la página")
})satisfies PageServerLoad