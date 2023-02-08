<script lang="ts">
  import PrevAndNext from "../../components/PrevAndNext.svelte";
  import SeriesGrid from "../../components/SeriesGrid.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  let isLoadMore = true;

  $: data,
    setTimeout(() => {
      data.animation = true;
    }, 100);
</script>

<PrevAndNext
  direction="series"
  {isLoadMore}
  page={data.series.page}
  totalPages={data.series.total_pages}
/>

<SeriesGrid animation={data.animation} series={data.series} />
