import { error } from '@sveltejs/kit';
import getMovies from '../../api/getMovies';
import type { MovieInterface } from '../../interface/Movie';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const query = url.searchParams.get('query');

    const page = url.searchParams.get('page') ?? 1;
    const movies: MovieInterface = await getMovies(
        `/search/movie?query=${query}&language=es&page=${page}`
    );

    if (movies) {
        return { movies, animation: false, query };
    }

    throw error(404, 'Servidor caído');
}) satisfies PageServerLoad;
