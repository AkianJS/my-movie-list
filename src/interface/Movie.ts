export interface MovieInterface {
    page: number;
    results: Movie[]
    total_pages: number
    total_resutls: number
}

export type Movie = {
    adult: boolean
    backgrop_path: string
    genre_ids: []
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string // Las películas tienen title y las series name
    name: string // Las series no tienen title, tienen name
    video: boolean
    vote_average: number
    vote_count: number
    id:number
}