import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import getMovies from '../../api/getMovies';
import type { SeriesInterface } from '../../interface/Serie';

interface ObjLiteral {
    [index: string]: string;
}

export const load: PageServerLoad = (async ({ url }) => {
    const filter = url.searchParams.get('filter') || 'discover';
    const filters: ObjLiteral = {
        top: '/tv/top_rated?',
        airing: '/tv/on_the_air?',
        discover: '/discover/tv?',
    };
    const page = url.searchParams.get('page');
    const series: SeriesInterface = await getMovies(
        `${filters[filter]}&language=es&page=${page}`
    );

    if (series) {
        return {
            series,
            animation: false,
            filter,
        };
    }

    throw error(404, 'No se puede cargar la página');
}) satisfies PageServerLoad;
