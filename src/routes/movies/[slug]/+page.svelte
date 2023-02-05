<script lang="ts">
  import type { ImageInterface } from "../../../interface/Images";
  import type { Movie } from "../../../interface/Movie";
  type DataType = {
    movie: Movie;
    images: ImageInterface;
  };

  export let data: DataType;


  let { movie, images } = data;
  const backdropImage = images.backdrops[0]
    ? `https://image.tmdb.org/t/p/original${images.backdrops[0].file_path}`
    : "/src/assets/image-placeholder.png";
  const posterImage = images.posters[0]
    ? `https://image.tmdb.org/t/p/original${images.posters[0].file_path}`
    : "/src/assets/image-placeholder.png";
</script>

<section class="min-h-screen bg-gradient-to-tr from-zinc-600 to-zinc-700">
  <div class="image2-container absolute top-16 right-0 opacity-70">
    <div
      style={`background-image: url(${backdropImage})`}
      class="image-container absolute bg-teal-800 top-0 right-0"
    />
  </div>
  <main class="flex gap-6 flex-wrap px-8 relative max-[967px]:justify-center">
    <div class="mt-8">
      <img
        class=""
        width="320"
        height="480"
        src={posterImage}
        alt="Movie poster"
      />
    </div>
    <div
      class="my-8 min-w-[380px] max-w-lg text-start text-xl text-neutral-200 space-y-3"
    >
      <h1><strong> Title: </strong>{movie.title || movie.name}</h1>
      <p><strong> Description: </strong>{movie.overview}</p>
    </div>
  </main>
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
