<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { invalidate } from '$app/navigation';
    import type { SubmitFunction } from '$app/forms';
    import type { LayoutData } from './$types';
    import Navbar from '$lib/components/ui/layout/Navbar.svelte';
    import Sidebar from '$lib/components/ui/layout/Sidebar.svelte';

    let isMenuOpen = true;
    let movieSubMenu = false;
    let serieSubMenu = false;
    export let data: LayoutData;

    $: ({ supabase, session } = data);

    onMount(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, _session) => {
            if (_session?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });

        return () => subscription.unsubscribe();
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
    class="min-h-[90vh] bg-zinc-600 {isMenuOpen
        ? 'ml-40 duration-200'
        : 'ml-12'}">
    <slot />
</div>
