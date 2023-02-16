<script lang="ts">
  import { enhance } from "$app/forms";

  export let title: "Ingresar" | "Registrarse";
  export let error: string|undefined;

</script>

<div class="max-w-md mx-auto">
  <h1 class="font-bold text-center text-xl">{title}</h1>
  <form
  use:enhance
  action={title.toLocaleLowerCase() === "ingresar"? "?/login" : "?/register"}
  method="POST"
    class="flex flex-col gap-6"
  >
    <div class="flex flex-col justify-center">
      <label for="email"> Email </label>
      <input
        name="email"
        class="w-full max-w-md rounded-md text-black py-1 px-4 outline-none"
        placeholder="tu-email@gmail.com"
        id="email"
        type="email"
      />
    </div>
    <div class="flex flex-col justify-center">
      <label for="password"> Password </label>
      <input
        name="password"
        class="w-full max-w-md rounded-md text-black py-1 px-4 outline-none"
        placeholder="tu-password"
        id="password"
        type="password"
      />
    </div>
    {#if error}
       <h2 class="text-center">{error}</h2>
    {/if}
    <button type="submit" class="py-2 px-4 bg-emerald-500 rounded-md"
      >{title}</button
    >
  </form>
</div>

<style>
</style>
