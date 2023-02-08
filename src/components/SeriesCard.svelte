<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { PageData } from "../routes/series/[slug]/$types";

  export let data: PageData;

  let { serie, images, videos } = data;
  const backdropImage = images.backdrops[0]
    ? `https://image.tmdb.org/t/p/original${images.backdrops[0].file_path}`
    : "/src/assets/image-placeholder.png";
  const posterImage = images.posters[0]
    ? `https://image.tmdb.org/t/p/original${images.posters[0].file_path}`
    : "/src/assets/image-placeholder.png";

  const trailer = videos.results.map(
    ({ site, key }: { site: string; key: string }) =>
      site === "YouTube" ? key : null
  );
</script>

<section
  class="min-h-screen w-full bg-gradient-to-tr from-zinc-600 to-zinc-700 mb-8"
>
  <div class="image2-container absolute top-16 right-0 opacity-70">
    <div
      style={`background-image: url(${backdropImage})`}
      class="image-container absolute bg-teal-800 top-0 right-0"
    />
  </div>
  <main class="flex gap-6 flex-wrap px-8 relative max-[1080px]:justify-center">
    <div class="mt-8">
      <img
        class="object-cover"
        width="320"
        height="480"
        src={posterImage}
        alt="Movie poster"
      />
    </div>
    <div
      class="my-8 min-w-[240px] max-w-lg text-start text-xl text-neutral-200 space-y-3"
    >
      <h1><strong> Título original: </strong>{serie.original_name}</h1>
      <h1><strong> Título: </strong>{serie.name}</h1>
      <p><strong> Descripción: </strong>{serie.overview}</p>
      <p>
        <strong> Estado: </strong>{serie.in_production
          ? "En producción"
          : "Finalizada"}
      </p>
      <p>
        <strong>Géneros: </strong>{serie.genres
          ?.map((item) => item.name)
          .join(", ")}
      </p>
      <p><strong>Espisodios: </strong> {serie.number_of_episodes}</p>
      <p class="flex gap-2 items-center">
        <strong>Puntuación:</strong>
        {serie.vote_average.toFixed(2)}
        <span class="text-yellow-400">
          <Icon width="28" icon="ic:baseline-star" /></span
        >
      </p>
    </div>
  </main>

  {#if trailer.length}

  <h2 class="mt-8 text-center text-2xl font-bold">Trailer: </h2>
  
    <article
      class="relative mx-auto my-8 min-w-[320px] w-[60vw] max-w-[768px] h-[40vw] max-h-[420px] z-[1]"
    >
      <iframe
        class="absolute top-0 left-0 w-full h-full"
        allowfullscreen
        title={serie.name}
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/" + trailer[0]}
        frameborder="0"
      />
    </article>
  {/if}
</section>

<style>
  .image-container,
  .image2-container {
    width: 70vw;
    height: 40rem;
  }
  .image-container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-mask-image: linear-gradient(to top, transparent 23%, black 100%);
    mask-image: linear-gradient(to top, transparent 23%, black 100%);
  }

  .image2-container {
    -webkit-mask-image: linear-gradient(to right, transparent 3%, black 30%);
    mask-image: linear-gradient(to right, transparent 3%, black 30%);
  }
</style>
