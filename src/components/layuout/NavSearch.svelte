<script lang="ts">
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  let search: string;

  let handleSearch = async() => {
    await goto(`/movies?page=1&query=${search}`, { replaceState: true });
  };
</script>

<div class="max-w-md w-[40vw] relative">
  <input
    on:keypress={(e) => e.key === "Enter" ? handleSearch() : undefined}
    bind:value={search}
    class="pl-10 py-1 bg-zinc-700 rounded-md w-full outline-none"
    type="text"
  />
  <button on:click={handleSearch} type="submit" class="absolute left-0 text-zinc-400">
    <Icon icon="ic:baseline-search" width="32" height="32" />
  </button>
</div>
