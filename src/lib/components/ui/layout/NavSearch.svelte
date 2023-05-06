<script lang="ts">
    import { goto } from '$app/navigation';
    import { Search } from 'lucide-svelte';
    let search: string;

    let handleSearch = async () => {
        await goto(`/movies?page=1&query=${search}`, { replaceState: false });
    };
</script>

<div class="relative w-[40vw] max-w-md">
    <input
        placeholder="Qué películas buscas?"
        on:keypress={(e) => (e.key === 'Enter' ? handleSearch() : undefined)}
        bind:value={search}
        class="w-full rounded-md bg-zinc-700 py-1 pl-10 outline-none"
        type="text" />
    <button
        on:click={handleSearch}
        type="submit"
        class="absolute left-0 text-zinc-400">
        <Search />
    </button>
</div>
