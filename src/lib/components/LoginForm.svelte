<script lang="ts">
    import { enhance } from '$app/forms';
    import Icon from '@iconify/svelte';

    export let title: 'Ingresar' | 'Registrarse';
    export let error: string | undefined;
</script>

<div class="max-w-md mx-auto">
    <h1 class="font-bold text-center text-xl">{title}</h1>
    <form
        use:enhance
        action={title.toLocaleLowerCase() === 'ingresar'
            ? '?/login'
            : '?/register'}
        method="POST"
        class="flex flex-col gap-6">
        <div class="flex flex-col justify-center">
            <label for="email"> Email </label>
            <input
                name="email"
                class="w-full max-w-md rounded-md text-black py-1 px-4 outline-none"
                placeholder="tu-email@gmail.com"
                id="email"
                type="email" />
        </div>
        <div class="flex flex-col justify-center">
            <label for="password"> Password </label>
            <input
                name="password"
                class="w-full max-w-md rounded-md text-black py-1 px-4 outline-none"
                placeholder="tu-password"
                id="password"
                type="password" />
        </div>
        {#if error}
            <h2 class="text-center">{error}</h2>
        {/if}
        <form class="mx-auto" method="post" action="?/google">
            <button
                class="inline-flex items-center mx-auto px-2 py-1 rounded-lg bg-white text-blue-400 hover:scale-105 duration-150"
                >{title} con <Icon
                    class="ml-1"
                    icon="bi:google" />oogle</button>
        </form>
        <button type="submit" class="py-2 px-4 bg-emerald-500 rounded-md"
            >{title}</button>
    </form>
</div>
