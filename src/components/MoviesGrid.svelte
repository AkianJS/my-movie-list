<script lang="ts">
  import { fly } from "svelte/transition";
  import type { MovieInterface } from "../interface/Movie";
  import placeholder from "$lib/assets/image-placeholder.png";
  import PrevAndNext from "./PrevAndNext.svelte";

  export let movies: MovieInterface;
  export let isLoadMore: boolean = true;
  export let animation: boolean;
  export let queryParams: string = "";

  const image = "https://image.tmdb.org/t/p/w500";
</script>

{#if isLoadMore}
  <PrevAndNext
    direction={queryParams ? `movies?filter=${queryParams}` : `movies?`}
    page={movies.page}
    totalPages={movies.total_pages}
  />
{/if}

<div class="my-6">
  <ul>
    {#if animation}
      {#each movies.results as movie, i}
        <li in:fly={{ delay: 100 * i, duration: 400, y: 100 }}>
          <a href={`/movies/${movie.id}`}>
            <img
              class="h-[348px]"
              width="232"
              height="348"
              src={movie.poster_path ? image + movie.poster_path : placeholder}
              alt={movie.title}
            />
            <h1 class="text-center font-bold">{movie.title}</h1>
          </a>
        </li>
      {/each}
    {/if}
  </ul>
  {#if isLoadMore}
    {#if animation}
    <PrevAndNext
    direction={queryParams ? `movies?filter=${queryParams}` : `movies?`}
    page={movies.page}
    totalPages={movies.total_pages}
  />
    {/if}
  {/if}
</div>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 232px);
    place-content: center;
    gap: 1rem;
  }

  @media (max-width: 560px) {
    ul {
      grid-template-columns: 1fr;
    }
    img {
      width: 360px;
      height: auto;
      margin: 0 auto;
    }
  }
</style>
