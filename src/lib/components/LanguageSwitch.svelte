<!-- src/lib/components/LanguageSwitch.svelte -->
<script>
  import { lang } from "$lib/stores/lang";

  const languages = [
    { code: "ru", name: "Русский" },
    { code: "en", name: "English" },
  ];
</script>

<div class="flex gap-2">
  {#each languages as { code, name }}
    <button
      class="px-2 py-1 rounded {$lang === code
        ? 'bg-blue-500 text-white'
        : 'bg-gray-200'}"
      on:click={() => lang.set(code)}
    >
      {name}
    </button>
  {/each}
</div>
