<script lang="ts">
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let display: 'block' | 'inline-block' = 'inline-block';
    export let onClick: () => void = () => {
        return;
    };
</script>

<button
    class={`relative rounded-md bg-emerald-500 px-4 py-2 ${display}`}
    on:click={onClick}
    {type}>
    <slot />
</button>

<style>
    button {
        transition: transform 1s ease-in-out;
    }

    button::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        border: 2px solid white;
        border-radius: 0.5rem;
        top: 0;
        left: 0;
        scale: 1.1 1.5;
        opacity: 0;
        transition: all 0.4s ease-in;
    }

    button:hover::after {
        opacity: 1;
        scale: 1;
        border: 1px solid white;
    }
</style>
