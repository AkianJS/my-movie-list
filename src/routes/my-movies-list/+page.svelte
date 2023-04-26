<script lang="ts">
    import MyMoviesList from '$lib/components/MyMoviesList.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    $: ({ tableData } = data);
</script>

<section class="mt-6 px-4">
    <MyMoviesList movies={tableData} />
</section>
