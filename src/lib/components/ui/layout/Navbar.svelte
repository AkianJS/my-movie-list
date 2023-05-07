<script lang="ts">
    import type { LayoutData } from '.svelte-kit/types/src/routes/$types';
    import { goto } from '$app/navigation';
    import { Menu, X } from 'lucide-svelte';
    import Logo from '$lib/assets/logo.png';

    import NavSearch from './NavSearch.svelte';
    import { enhance, type SubmitFunction } from '$app/forms';

    export let toggleMenu: () => void;
    export let isMenuOpen: boolean;
    export let data: LayoutData;
    export let handleLogout: SubmitFunction;
</script>

<div
    class="sticky top-0 z-10 flex h-16 w-full items-center bg-zinc-800 text-white">
    <div class="ml-2 mr-6 inline-block">
        <button class="max-md:hidden" on:click={toggleMenu}>
            {#if isMenuOpen}
                <X />
            {:else}
                <Menu />
            {/if}
        </button>
    </div>

    <nav class="h-full w-full">
        <ul class="mx-auto flex h-full items-center justify-start gap-6">
            <li>
                <img
                    class="rounded-lg"
                    width="36"
                    height="36"
                    src={Logo}
                    alt="logo" />
            </li>

            <li><NavSearch /></li>
            {#if !data.session}
                <li
                    class="ml-auto rounded-lg bg-emerald-500 px-2 py-1 duration-150 hover:bg-emerald-600">
                    <button on:click={() => goto('/login')}>Login</button>
                </li>
            {/if}

            {#if data.session}
                <li
                    class="ml-auto mr-6 rounded-lg bg-red-500 px-2 py-1 duration-150 hover:bg-red-600">
                    <form
                        use:enhance={handleLogout}
                        action="/logout"
                        method="POST">
                        <button type="submit">Logout</button>
                    </form>
                </li>
            {:else}
                <li
                    class="mr-6 rounded-lg bg-emerald-500 px-2 py-1 duration-150 hover:bg-emerald-600">
                    <button on:click={() => goto('/register')}
                        >Registrarse</button>
                </li>
            {/if}
        </ul>
    </nav>
</div>
