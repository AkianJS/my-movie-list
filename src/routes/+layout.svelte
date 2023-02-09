<script>
  import "../app.css";
  import Icon from "@iconify/svelte";
  import Logo from "../components/svg/logo.svelte";
  import NavSearch from "../components/layout/NavSearch.svelte";
  import { slide } from "svelte/transition";

  let isMenuOpen = true;
  let movieSubMenu = false;
  let serieSubMenu = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<div
  class={`grid duration-200 overflow-hidden ${
    isMenuOpen ? "grid-layout" : "grid-layout-closed"
  }`}
>
  <div
    class="w-full h-16 bg-zinc-800 text-white shadow-md flex items-center col-span-2 sticky right-0 top-0 z-10"
  >
    <div class="inline-block ml-2 mr-6">
      <button class="max-md:hidden" on:click={toggleMenu}>
        {#if isMenuOpen}
          <Icon icon="ic:baseline-close" width="32" height="32" />
        {:else}
          <Icon icon="ic:baseline-dehaze" width="32" height="32" />
        {/if}
      </button>
    </div>

    <nav class=" h-full">
      <ul class="max-w-screen-xl mx-auto h-full flex items-center gap-6">
        <li><svelte:component this={Logo} /></li>
        <li><NavSearch /></li>
      </ul>
    </nav>
  </div>

  <aside class="bg-zinc-800 text-white duration-200 h-full max-w-full">
    <nav
      on:mouseleave={() => {
        movieSubMenu = false;
        serieSubMenu = false;
      }}
      class={`flex flex-col justify-start gap-4 text-lg duration-100 max-md:w-[3rem] h-full fixed overflow-hidden ${
        isMenuOpen ? "w-40" : "max-w-[3rem] w-12"
      } `}
    >
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
        Películas</a
      >
      {#if movieSubMenu}
        <div
          on:mouseenter={() => (movieSubMenu = true)}
          transition:slide={{ duration: 400 }}
          class={`max-md:pl-3 flex flex-col justify-center  gap-4 overflow-hidden text-base ${!isMenuOpen ? "pl-3" : "pl-6"}`}
        >
          <a href="/movies?filter=top&page=1"
            ><span class="text-transparent bg-white"
              ><Icon
                icon="emojione-v1:top-arrow"
                width="20"
                height="20"
              /></span
            > Top</a
          >
          <a href="/movies?filter=news"
            ><span
              ><Icon
                icon="ic:outline-fiber-new"
                color="white"
                width="20"
                height="20"
              /></span
            > Nuevas</a
          >
          <a href="/movies?filter=upcoming">
            <span
              ><Icon
                icon="emojione-monotone:soon-arrow"
                color="white"
                width="20"
                height="20"
              /></span
            > Llegando</a
          >
        </div>
      {/if}
      <a on:mouseenter={() => (serieSubMenu = true)} href="/series">
        <span class="text-2xl">
          <Icon width="24" height="24" icon="ic:outline-tv" />
        </span>
        Series</a
      >
      {#if serieSubMenu}
        <div
          transition:slide={{ duration: 400 }}
          class={`max-md:pl-3 flex flex-col justify-center  gap-4 overflow-hidden text-base  ${!isMenuOpen ? "pl-3" : "pl-6"} `}
        >
          <a href="/series?filter=top"
            ><span class="text-transparent bg-white"
              ><Icon
                icon="emojione-v1:top-arrow"
                width="20"
                height="20"
              /></span
            > Top</a
          >
          <a href="/series?filter=news"
            ><span
              ><Icon
                icon="ic:outline-fiber-new"
                color="white"
                width="20"
                height="20"
              /></span
            > Nuevas</a
          >
          <a href="/series?filter=upcoming"
            ><span
              ><Icon
                icon="emojione-monotone:soon-arrow"
                color="white"
                width="20"
                height="20"
              /></span
            > Llegando</a
          >
        </div>
      {/if}
    </nav>
  </aside>

  <div class="bg-zinc-600 min-h-[90vh]">
    <slot />
  </div>
</div>

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

  .grid-layout {
    grid-template-columns: 10rem 1fr;
  }

  .grid-layout-closed {
    grid-template-columns: 3rem 1fr;
  }

  @media (max-width: 768px) {
    .grid-layout {
      grid-template-columns: 3rem 1fr;
    }
  }
</style>
