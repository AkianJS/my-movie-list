<script lang="ts">
  import CarouselComp from "../components/CarouselComp.svelte";
  import MoviesGrid from "../components/MoviesGrid.svelte";
  import type { MovieInterface } from "../interface/Movie";

  type DataType = {
    movies: MovieInterface;
    series: MovieInterface;
  };

  let images = [
    {
      title: "Barrio chino anime",
      src: "https://img.freepik.com/vector-gratis/perspectiva-calle-japonesa-luces-neon_52683-44988.jpg?w=1380&t=st=1675361448~exp=1675362048~hmac=351120b2f5f23a165375e60eebd5d3164d99022622f1a15d904c7da6ff1a8cc5",
    },
    {
      title: "Ramen",
      src: "https://img.freepik.com/vector-gratis/fondo-delicioso-sopa-ramen_52683-46005.jpg?w=1380&t=st=1675361449~exp=1675362049~hmac=a2862c7993ce26ca334907c7c0be2aa745ed488adbdeb71f12dfbb37ba50408b",
    },
    {
      title: "Banner anime",
      src: "https://img.freepik.com/vector-gratis/banner-anime-fuera-linea-twitch_79603-2018.jpg?w=1380&t=st=1675361450~exp=1675362050~hmac=653368e6c640bf1a16a888b9db5155becb48293a396c9ac76310ecd265ecd436",
    },
  ];
  export let data: DataType;
</script>

<section class="px-4">
  <h1 class="my-6 text-4xl uppercase font-semibold">
    Descubre nuevas películas..!
  </h1>
  <MoviesGrid movies={data.movies} />
</section>

<section class="px-4">
  <h1 class="mt-10 mb-6 text-4xl uppercase font-semibold">
    Series que no te podés perder!
  </h1>
  <MoviesGrid movies={data.series} />
</section>
