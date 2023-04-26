<script lang="ts">
    import SeriesGrid from '../../components/SeriesGrid.svelte';
    import type { PageData } from './$types';
    export let data: PageData;

    $: data,
        setTimeout(() => {
            data.animation = true;
        }, 100);
</script>

<SeriesGrid
    filter={data.filter}
    animation={data.animation}
    series={data.series} />
