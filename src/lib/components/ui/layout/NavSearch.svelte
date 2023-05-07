<script lang="ts">
    import { goto } from '$app/navigation';
    import { Search } from 'lucide-svelte';

    let search: string;

    const handleSearch = async () => {
        await goto(`/movie-search?query=${search}&page=1`, {
            replaceState: false,
        });
        search = '';
    };
</script>

<div class="relative flex w-[40vw] max-w-md items-center">
    <input
        placeholder="Qué películas buscas?"
        on:keypress={(e) => (e.key === 'Enter' ? handleSearch() : undefined)}
        bind:value={search}
        class="w-full rounded-md bg-zinc-700 py-1 pl-10 outline-none"
        type="text" />
    <button
        on:click={handleSearch}
        type="submit"
        class="absolute left-2 text-zinc-400">
        <Search />
    </button>
</div>
