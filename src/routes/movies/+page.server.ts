import { error } from '@sveltejs/kit';
import getMovies from '../../api/getMovies';
import type { MovieInterface } from '../../interface/Movie';
import type { PageServerLoad } from './$types';

interface ObjLiteral {
    [index: string]: string;
}

export const load = (async ({ url }) => {
    const filter = url.searchParams.get('filter') || 'discover';
    const filters: ObjLiteral = {
        top: '/movie/top_rated?',
        news: '/discover/movie?sort_by=release_date.desc',
        upcoming: '/movie/upcoming?',
        teather: '/movie/now_playing?',
        discover: '/discover/movie?',
    };

    const page = url.searchParams.get('page') || '';
    const movies: MovieInterface = await getMovies(
        `${filters[filter]}&language=es&page=${page}`
    );

    if (movies) {
        return { movies, animation: false, filter };
    }

    throw error(404, 'Servidor caído');
}) satisfies PageServerLoad;
