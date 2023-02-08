<script lang="ts">
  import MoviesGrid from "../../components/MoviesGrid.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  $:data, setTimeout(() => {
    data.animation = true
  }, 100)

</script>

<MoviesGrid animation={data.animation} movies={data.movies} />
