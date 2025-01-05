// src/lib/utils/i18n.js
import { getContext } from "svelte";
import { translations } from "$lib/i18n/translations";
import { get } from "svelte/store";
import { lang } from "$lib/stores/lang";

export function t(key) {
  const currentLang = get(lang);
  const keys = key.split(".");
  let value = translations[currentLang];

  for (const k of keys) {
    if (value === undefined) return key;
    value = value[k];
  }

  return value || key;
}
