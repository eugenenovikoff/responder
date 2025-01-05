// src/lib/stores/lang.js
import { writable } from "svelte/store";
import { browser } from "$app/environment";

// Получаем сохранённый язык или язык браузера, или по умолчанию 'ru'
const initialLang = browser
  ? window.localStorage.getItem("lang") ||
    navigator.language.slice(0, 2) ||
    "ru"
  : "ru";

export const lang = writable(initialLang);

// Сохраняем выбранный язык в localStorage
if (browser) {
  lang.subscribe((value) => {
    window.localStorage.setItem("lang", value);
  });
}
