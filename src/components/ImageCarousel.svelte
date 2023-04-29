<script lang="ts">
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    export let images: { title: string; src: string }[];
</script>

<header class="mx-auto mb-8 max-w-5xl">
    <Splide
        options={{ rewind: true, autoplay: true, lazyLoad: 'sequential' }}
        hasTrack={false}
        aria-label="Header Slider">
        <div class="custom-wrapper mx-auto max-w-5xl">
            <SplideTrack>
                {#each images as item}
                    <SplideSlide>
                        <img
                            class="mx-auto"
                            width="700"
                            height="300"
                            src={item.src}
                            alt={item.title} />
                    </SplideSlide>
                {/each}
            </SplideTrack>
        </div>
    </Splide>
</header>

<style>
</style>
