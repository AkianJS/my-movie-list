<script lang="ts">
  import type { MovieInterface } from "../interface/Movie";
  export let movies: MovieInterface;
  const image = "https://image.tmdb.org/t/p/w500";
</script>

<section class="my-6">
  <ul>
    {#each movies.results as movie}
      <a href={movie.title? `/movies/${movie.id}` : `/series/${movie.id}`}>
        <li>
          <img
          class="h-[348px]"
            width="232"
            height="348"
            src={movie.poster_path
              ? image + movie.poster_path
              : "/src/assets/image-placeholder.png"}
            alt={movie.title || movie.name}
          />
          <h1 class="text-center font-bold">{movie.title || movie.name}</h1>
        </li>
      </a>
    {/each}
  </ul>
  <div class="mt-8 flex gap-6 justify-center">
    <button>iz</button>
    <button>med</button>
    <button>der</button>
  </div>
</section>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 232px);
    place-content: center;
    gap: 1rem;
  }
</style>
