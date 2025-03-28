import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false,
  },

  // Vuetify build configuration
  build: {
    transpile: ["vuetify"],
  },

  modules: ["@pinia/nuxt"],

  app: {
    head: {
      title: "Meeting - MPS",
    },
  },

  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],
  compatibilityDate: "2024-12-04",
});
