<script lang="ts">
  import SeriesGrid from "../../components/SeriesGrid.svelte";
  import type { PageData } from "./$types";
  export let data:PageData

</script>

<SeriesGrid series={data.series} />