<script lang="ts">
    import type { PageData } from '.svelte-kit/types/src/routes/$types';
    import { goto } from '$app/navigation';
    import Logo from '$lib/assets/logo.svelte';
    import Icon from '@iconify/svelte';

    import NavSearch from './NavSearch.svelte';
    import { enhance, type SubmitFunction } from '$app/forms';
    export let toggleMenu: () => void;
    export let isMenuOpen: boolean;
    export let data: PageData;
    export let handleLogout: SubmitFunction;
</script>

<div
    class="w-full h-16 bg-zinc-800 text-white shadow-md flex items-center col-span-2 sticky top-0 z-10">
    <div class="inline-block ml-2 mr-6">
        <button class="max-md:hidden" on:click={toggleMenu}>
            {#if isMenuOpen}
                <Icon icon="ic:baseline-close" width="32" height="32" />
            {:else}
                <Icon icon="ic:baseline-dehaze" width="32" height="32" />
            {/if}
        </button>
    </div>

    <nav class="w-full h-full">
        <ul class="mx-auto h-full flex justify-start items-center gap-6">
            <li><svelte:component this={Logo} /></li>

            <li><NavSearch /></li>
            {#if !data.session}
                <li
                    class="bg-emerald-500 py-1 px-2 ml-auto rounded-lg duration-150 hover:bg-emerald-600">
                    <button on:click={() => goto('/login')}>Login</button>
                </li>
            {/if}

            {#if data.session}
                <li
                    class="bg-red-500 py-1 px-2 ml-auto mr-6 rounded-lg duration-150 hover:bg-red-600">
                    <form
                        use:enhance={handleLogout}
                        action="/logout"
                        method="POST">
                        <button type="submit">Logout</button>
                    </form>
                </li>
            {:else}
                <li
                    class="bg-emerald-500 py-1 px-2 mr-6 rounded-lg duration-150 hover:bg-emerald-600">
                    <button on:click={() => goto('/register')}
                        >Registrarse</button>
                </li>
            {/if}
        </ul>
    </nav>
</div>
