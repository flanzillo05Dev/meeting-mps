<script setup lang="ts">
import ScrollTop from '@/components/shared/BackToTop.vue'
import CookieConsent from '@/components/shared/CookieConsent.vue'

import "aos/dist/aos.css";
import AOS from "aos";
import { ChevronUpIcon } from "vue-tabler-icons";
onMounted(() => {
  AOS.init();
});
const LoginPopup = ref(false);

</script>
<template>
  <v-locale-provider>
    <v-app>
      <v-main>
        <!--Content-->
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <!---ScrollTop Button----->
        <ScrollTop />
        <CookieConsent />
      </v-main>
    </v-app>
  </v-locale-provider>
</template>