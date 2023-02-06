<script lang="ts">
  import type { MovieInterface } from "../interface/Movie";
  import PrevAndNext from "./PrevAndNext.svelte";
  export let movies: MovieInterface;
  export let isLoadMore: boolean = true;
  const image = "https://image.tmdb.org/t/p/w500";
</script>

<PrevAndNext
  direction="movies"
  {isLoadMore}
  page={movies.page}
  totalPages={movies.total_pages}
/>

<div class="my-6">
  <ul>
    {#each movies.results as movie}
      <li>
        <a href={`/movies/${movie.id}`}>
          <img
            class="h-[348px]"
            width="232"
            height="348"
            src={movie.poster_path
              ? image + movie.poster_path
              : "/src/assets/image-placeholder.png"}
            alt={movie.title}
          />
          <h1 class="text-center font-bold">{movie.title}</h1>
        </a>
      </li>
    {/each}
  </ul>

  <PrevAndNext
    direction="movies"
    {isLoadMore}
    page={movies.page}
    totalPages={movies.total_pages}
  />
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
