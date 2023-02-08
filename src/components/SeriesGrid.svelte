<script lang="ts">
  import { fly } from "svelte/transition";
  import type { SeriesInterface } from "../interface/Serie";
  export let series: SeriesInterface;
  export let animation: boolean;

  const image = "https://image.tmdb.org/t/p/w500";
</script>

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
              src={movie.poster_path
                ? image + movie.poster_path
                : "/src/assets/image-placeholder.png"}
              alt={movie.name}
            />
            <h1 class="text-center font-bold">{movie.name}</h1>
          </a>
        </li>
      {/each}
    {/if}
  </ul>
  <div class="mt-8 flex gap-6 justify-center">
    <button>iz</button>
    <button>med</button>
    <button>der</button>
  </div>
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
