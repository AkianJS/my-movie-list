<script lang="ts">
    import { goto } from '$app/navigation';
    export let page: number;
    export let totalPages: number;
    export let direction: string;

    const handleNextPage = () => {
        goto(`/${direction}&page=${page + 1}`);
    };

    const handlePrevPage = () => {
        goto(`/${direction}&page=${page - 1}`);
    };
</script>

<div class="mt-8 flex gap-6 justify-center items-center">
    {#if +page > 1}
        <button on:click={handlePrevPage}>««</button>
    {/if}

    <p>
        Página <span class="text-blue-500 font-bold">{page}</span> de
        <span class="text-blue-500">{totalPages}</span>
    </p>

    {#if +page < +totalPages}
        <button on:click={handleNextPage}>»»</button>
    {/if}
</div>
