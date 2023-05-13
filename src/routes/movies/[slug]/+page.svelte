<script lang="ts">
    import MovieCard from '../../../components/MovieCard.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.movie.title}</title>
    <meta name="description" content={data.movie.overview} />
</svelte:head>

{#key data.movie.id}
    <MovieCard {data} />
{/key}
