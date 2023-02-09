<script lang="ts">
  import placeholder from "$lib/assets/image-placeholder.png";
  import { fly } from "svelte/transition";
  import type { SeriesInterface } from "../interface/Serie";
  import PrevAndNext from "./PrevAndNext.svelte";
  export let series: SeriesInterface;
  export let animation: boolean;
  export let filter:string = "";
  export let isLoadMore = true;

  const image = "https://image.tmdb.org/t/p/w500";
</script>

{#if isLoadMore}
  <PrevAndNext
    direction={filter ? `series?filter=${filter}` : "series?"}
    page={series.page}
    totalPages={series.total_pages}
  />
{/if}

<div class="my-6">
  <ul>
    {#if animation}
      {#each series.results as movie, i}
        <li in:fly={{ delay: 100 * i, duration: 400, y: 100 }}>
          <a href={`/series/${movie.id}`}>
            <img
              class="h-[348px]"
              width="232"
              height="348"
              src={movie.poster_path ? image + movie.poster_path : placeholder}
              alt={movie.name}
            />
            <h1 class="text-center font-bold">{movie.name}</h1>
          </a>
        </li>
      {/each}
    {/if}
  </ul>

  {#if isLoadMore}
    <PrevAndNext
      direction="series"
      page={series.page}
      totalPages={series.total_pages}
    />
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
