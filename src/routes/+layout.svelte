<!-- src/routes/+layout.svelte -->
<script>
  import "../app.postcss";
  import { t } from "$lib/utils/i18n";
  import LanguageSwitch from "$lib/components/LanguageSwitch.svelte";
</script>

<header class="bg-white shadow">
  <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
    <div class="flex gap-6">
      <a href="/" class="font-bold">{t("nav.home")}</a>
      <a href="/questions">{t("nav.questions")}</a>
      <a href="/questions/ask">{t("nav.ask")}</a>
    </div>

    <div class="flex items-center gap-4">
      <LanguageSwitch />
      <a href="/login">{t("nav.login")}</a>
      <a href="/register" class="bg-blue-500 text-white px-4 py-2 rounded">
        {t("nav.register")}
      </a>
    </div>
  </nav>
</header>

<main>
  <slot />
</main>
