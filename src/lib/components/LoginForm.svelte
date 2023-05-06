<script lang="ts">
    import { enhance } from '$app/forms';
    import Button from './ui/Button.svelte';

    export let title: 'Ingresar' | 'Registrarse';
    export let error: string | undefined;
</script>

<div class="mx-auto max-w-md">
    <h1 class="text-center text-xl font-bold">{title}</h1>
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
                class="w-full max-w-md rounded-md px-4 py-1 text-black outline-none"
                placeholder="tu-email@gmail.com"
                id="email"
                type="email" />
        </div>
        <div class="flex flex-col justify-center">
            <label for="password"> Password </label>
            <input
                name="password"
                class="w-full max-w-md rounded-md px-4 py-1 text-black outline-none"
                placeholder="tu-password"
                id="password"
                type="password" />
        </div>
        {#if error}
            <h2 class="text-center">{error}</h2>
        {/if}
        <form class="mx-auto" method="post" action="?/google">
            <button
                class="mx-auto inline-flex items-center rounded-lg bg-white px-2 py-1 text-blue-400 duration-150 hover:scale-105"
                >{title} con <strong style="margin-left: .25rem;">G</strong>
                oogle</button>
        </form>
        <Button type="submit">{title}</Button>
    </form>
</div>
