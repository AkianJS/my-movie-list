<script lang="ts">
  import PrevAndNext from "../../components/PrevAndNext.svelte";
  import SeriesGrid from "../../components/SeriesGrid.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  $: data,
    setTimeout(() => {
      data.animation = true;
    }, 100);
</script>

<SeriesGrid animation={data.animation} series={data.series} />

