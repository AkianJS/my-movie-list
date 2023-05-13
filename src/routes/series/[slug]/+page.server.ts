import { error } from '@sveltejs/kit';
import getMovies from '../../../api/getMovies';
import type { ImageInterface } from '../../../interface/Images';
import type { Serie, SeriesInterface } from '../../../interface/Serie';
import type { PageServerLoad } from './$types';

type VideosTypes = {
    results: {
        site: string;
        key: string;
        type: string;
    }[];
};

export const load: PageServerLoad = (async ({ params }) => {
    let serie: Serie = await getMovies(`/tv/${params.slug}?language=es`);

    if (serie.overview === '') {
        serie = await getMovies(`/tv/${params.slug}`);
    }

    const images: ImageInterface = await getMovies(`/tv/${params.slug}/images`);

    const videos: VideosTypes = await getMovies(`/tv/${params.slug}/videos`);

    const recommendations: SeriesInterface = await getMovies(
        `/tv/${params.slug}/recommendations`
    );
    console.log(serie.name);

    if (serie) {
        return {
            serie,
            images,
            videos,
            recommendations,
        };
    }
    throw error(404, 'No se pudo encontrar la página');
}) satisfies PageServerLoad;
