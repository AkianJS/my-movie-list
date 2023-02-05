<script lang="ts">
  import CarouselComp from "../components/CarouselComp.svelte";
  import MoviesGrid from "../components/MoviesGrid.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  console.log(data.backdrops)
</script>

<CarouselComp images={data.backdrops} />

<section class="px-4">
  <h1 class="my-6 text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold">
    Descubre nuevas películas..!
  </h1>
  <MoviesGrid movies={data.movies} />
</section>

<section class="px-4">
  <h1 class="my-6 text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold">
    Series que no te podés perder!
  </h1>
  <MoviesGrid movies={data.series} />
</section>
