<script lang="ts">
    import {
        ArrowBigUp,
        Home,
        Film,
        Tv,
        Airplay,
        Clapperboard,
        ScreenShare,
    } from 'lucide-svelte';
    import { slide } from 'svelte/transition';

    export let isMenuOpen: boolean;

    let movieSubMenu: boolean;
    let serieSubMenu: boolean;
    let sidebarWidth: string;

    $: isMenuOpen,
        (sidebarWidth = isMenuOpen ? 'max-w-[9rem]' : 'max-w-[3rem]');
</script>

<aside
    class={`fixed bottom-0 top-16 w-full bg-zinc-800 text-white duration-200 ${sidebarWidth}`}>
    <nav
        on:mouseleave={() => {
            movieSubMenu = false;
            serieSubMenu = false;
        }}
        class={`flex h-full w-full flex-col justify-start gap-4 overflow-hidden text-lg duration-200 max-md:w-[3rem] ${sidebarWidth} `}>
        <a data-sveltekit-reload href="/">
            <span class="text-2xl">
                <Home />
            </span>
            <p>Inicio</p>
        </a>
        <a on:mouseenter={() => (movieSubMenu = true)} href="/movies">
            <span class="text-2xl">
                <Film />
            </span>
            Películas</a>
        {#if movieSubMenu}
            <div
                on:mouseenter={() => (movieSubMenu = true)}
                transition:slide={{ duration: 400 }}
                class={`flex flex-col justify-center gap-4 overflow-hidden text-base max-md:pl-3 ${
                    !isMenuOpen ? 'pl-3' : 'pl-6'
                }`}>
                <a href="/movies?filter=top&page=1"
                    ><span class="text-white"><ArrowBigUp /></span> Top</a>
                <a href="/movies?filter=teather"
                    ><span><Clapperboard /> </span> Cine</a>
                <a href="/movies?filter=upcoming">
                    <span><Airplay /></span> Nuevas</a>
            </div>
        {/if}
        <a on:mouseenter={() => (serieSubMenu = true)} href="/series">
            <span class="text-2xl">
                <Tv />
            </span>
            Series</a>
        {#if serieSubMenu}
            <div
                transition:slide={{ duration: 400 }}
                class={`flex flex-col justify-center gap-4  overflow-hidden text-base max-md:pl-3  ${
                    !isMenuOpen ? 'pl-3' : 'pl-6'
                } `}>
                <a href="/series?filter=top"
                    ><span class="text-white"><ArrowBigUp /></span> Top</a>
                <a href="/series?filter=airing"
                    ><span><ScreenShare /></span> Al aire</a>
            </div>
        {/if}
    </nav>
</aside>

<style>
    a {
        height: 2rem;
        padding: 0.25rem 0.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    a:hover {
        @apply bg-zinc-500;
    }
</style>
