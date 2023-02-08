<script lang="ts">
  import SeriesCard from "../../../components/SeriesCard.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.serie.name}</title>
  <meta name="description" content={data.serie.overview} />
</svelte:head>

<SeriesCard {data} />
