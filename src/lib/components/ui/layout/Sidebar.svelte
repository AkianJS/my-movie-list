<script lang="ts">
    import Icon from '@iconify/svelte';
    import { slide } from 'svelte/transition';

    export let movieSubMenu: boolean;
    export let serieSubMenu: boolean;
    export let isMenuOpen: boolean;
</script>

<aside
    class="bg-zinc-800 text-white duration-200 max-w-full fixed top-16 bottom-0">
    <nav
        on:mouseleave={() => {
            movieSubMenu = false;
            serieSubMenu = false;
        }}
        class={`flex flex-col justify-start gap-4 text-lg duration-100 max-md:w-[3rem] h-full overflow-hidden ${
            isMenuOpen ? 'w-40' : 'max-w-[3rem] w-12'
        } `}>
        <a data-sveltekit-reload href="/">
            <span class="text-2xl">
                <Icon inline icon="ic:sharp-home" />
            </span>
            <p>Inicio</p>
        </a>
        <a on:mouseenter={() => (movieSubMenu = true)} href="/movies">
            <span class="text-2xl">
                <Icon width="24" height="24" icon="ic:outline-local-movies" />
            </span>
            Películas</a>
        {#if movieSubMenu}
            <div
                on:mouseenter={() => (movieSubMenu = true)}
                transition:slide={{ duration: 400 }}
                class={`max-md:pl-3 flex flex-col justify-center  gap-4 overflow-hidden text-base ${
                    !isMenuOpen ? 'pl-3' : 'pl-6'
                }`}>
                <a href="/movies?filter=top&page=1"
                    ><span class="text-white"
                        ><Icon
                            icon="emojione-monotone:top-arrow"
                            width="20"
                            height="20" /></span> Top</a>
                <a href="/movies?filter=teather"
                    ><span
                        ><Icon
                            icon="arcticons:cinema-hd"
                            color="white"
                            width="20"
                            height="20" /></span> Cine</a>
                <a href="/movies?filter=upcoming">
                    <span
                        ><Icon
                            icon="emojione-monotone:soon-arrow"
                            color="white"
                            width="20"
                            height="20" /></span> Nuevas</a>
            </div>
        {/if}
        <a on:mouseenter={() => (serieSubMenu = true)} href="/series">
            <span class="text-2xl">
                <Icon width="24" height="24" icon="ic:outline-tv" />
            </span>
            Series</a>
        {#if serieSubMenu}
            <div
                transition:slide={{ duration: 400 }}
                class={`max-md:pl-3 flex flex-col justify-center  gap-4 overflow-hidden text-base  ${
                    !isMenuOpen ? 'pl-3' : 'pl-6'
                } `}>
                <a href="/series?filter=top"
                    ><span class="text-white"
                        ><Icon
                            icon="emojione-monotone:top-arrow"
                            width="20"
                            height="20" /></span> Top</a>
                <a href="/series?filter=airing"
                    ><span
                        ><Icon
                            icon="mdi:remote-tv"
                            color="white"
                            width="20"
                            height="20" /></span> Al aire</a>
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
