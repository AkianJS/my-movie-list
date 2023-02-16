<script lang="ts">
  import CarouselComp from "../components/ImageCarousel.svelte";
  import MoviesGrid from "../components/MoviesGrid.svelte";
  import SeriesGrid from "../components/SeriesGrid.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: data,
    setTimeout(() => {
      data.animation = true;
    }, 100);
</script>

<CarouselComp images={data.backdrops} />

<section class="px-4">
  <h1 class="my-6 font-semibold">Descubre nuevas películas..!</h1>
  <MoviesGrid
    animation={data.animation}
    isLoadMore={false}
    movies={data.movies}
  />
</section>

<section class="px-4 ">
  <h1 class="my-6 font-semibold">Series que no te podés perder!</h1>
  <SeriesGrid isLoadMore={false} animation={data.animation} series={data.series} />
</section>

<style>
  h1 {
    font-size: clamp(1.5rem, 3vw, 3rem);
  }
</style>
