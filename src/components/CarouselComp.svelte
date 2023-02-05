<script lang="ts">
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";
  type ImageType = {
    title: string;
    src: string;
  };
  export let images: ImageType[];
</script>

{#if browser}
  <Carousel>
    {#each images as { title, src }}
      <img {src} alt={title} />
    {/each}
  </Carousel>
{/if}
