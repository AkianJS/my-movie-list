<script lang="ts">
  import MoviesGrid from "../../components/MoviesGrid.svelte";
  import type { PageData } from "./$types";
  export let data:PageData;

  $: (data)
</script>

<MoviesGrid movies={data.movies} />
