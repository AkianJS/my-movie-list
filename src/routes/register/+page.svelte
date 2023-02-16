<script lang="ts">
  import LoginForm from "$lib/components/LoginForm.svelte";
  export let form:{error:string|undefined};
</script>

<section class="mt-6">
  <LoginForm error={form?.error} title="Registrarse" />
</section>
