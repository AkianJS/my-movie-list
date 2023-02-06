<script lang="ts">
  import MovieCard from "../../../components/MovieCard.svelte";
import type { PageData } from "./$types";

  export let data: PageData;
</script>

<MovieCard {data}/>

