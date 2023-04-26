<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { invalidateAll } from '$app/navigation';
    import supabase from '$lib/utils/supabase';
    import type { SubmitFunction } from '$app/forms';
    import type { PageData } from './$types';
    import Navbar from '$lib/components/ui/layout/Navbar.svelte';
    import Sidebar from '$lib/components/ui/layout/Sidebar.svelte';

    let isMenuOpen = true;
    let movieSubMenu = false;
    let serieSubMenu = false;
    export let data: PageData;

    onMount(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(() => {
            invalidateAll();
        });

        return () => {
            subscription.unsubscribe();
        };
    });

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const handleLogout: SubmitFunction = async ({ cancel }) => {
        const { error } = await supabase.auth.signOut();

        if (error) return alert('No se pudo cerrar sesión');

        cancel();
    };
</script>

<Navbar {toggleMenu} {isMenuOpen} {data} {handleLogout} />

<Sidebar {isMenuOpen} {movieSubMenu} {serieSubMenu} />

<div
    class="bg-zinc-600 min-h-[90vh] {isMenuOpen
        ? 'ml-40 duration-200'
        : 'ml-12'}">
    <slot />
</div>
