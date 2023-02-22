import { error } from '@sveltejs/kit'
import getMovies from '../../../api/getMovies'
import type { ImageInterface } from '../../../interface/Images'
import type { Serie } from '../../../interface/Serie'
import type { PageServerLoad } from './$types'

type VideosTypes = {
    results: {
        site: string
        key: string
        type: string
    }[]
}

export const load: PageServerLoad = (async ({ params }) => {
    let serie: Serie = await getMovies(`/tv/${params.slug}?language=es`)

    if (serie.overview === '') {
        serie = await getMovies(`/tv/${params.slug}`)
    }

    const images: ImageInterface = await getMovies(`/tv/${params.slug}/images`)

    const videos: VideosTypes = await getMovies(`/tv/${params.slug}/videos`)

    if (serie) {
        return {
            serie,
            images,
            videos,
        }
    }
    throw error(404, 'No se pudo encontrar la página')
}) satisfies PageServerLoad
