<script lang="ts">
  import SeriesCard from "../../../components/SeriesCard.svelte";
import type { PageData } from "./$types";

  export let data: PageData;

</script>

<SeriesCard {data} />
