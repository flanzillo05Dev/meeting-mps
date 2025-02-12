<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import Logo from "@/layouts/logo/logo.vue";
import { Menu2Icon } from "vue-tabler-icons";
import Login from "@/layouts/shared/auth/Login.vue";
import Register from "@/layouts/shared/auth/Register.vue";
import sidebarItem from "@/_mockApis/header/Menu";
import NavGroup from "./NavGroup/index.vue";
import NavItem from "./NavItem/index.vue";
import NavCollapse from "./NavCollapse/NavCollapse.vue";
import MobileNavCollapse from "./NavCollapse/MobileNavCollapse.vue";
const drawer = ref(false);

//For on Scroll Effect on Header
onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});
const stickyHeader = ref(false);
function handleScroll() {
  if (window.pageYOffset) {
    stickyHeader.value = true;
  } else {
    stickyHeader.value = false;
  }
}
</script>

<template>
  <div class="header white-header mt-n95">
    <!----sidebar menu drawer start----->
    <ClientOnly>
      <v-navigation-drawer
        color="white"
        class="drawer"
        v-model="drawer"
        temporary
      >
        <perfect-scrollbar class="scrollnavbar">
          <div class="menu text-capitalizew-100">
            <!---Menu Loop -->
              <!-----Login Button and Popup----->
<!--              <div>-->
<!--                <Login />-->
<!--              </div>-->
<!--              &lt;!&ndash;-&#45;&#45;Register Button and Popup-&#45;&#45;&ndash;&gt;-->
<!--              <div>-->
<!--                  <Register />-->
<!--              </div>-->
          </div>
        </perfect-scrollbar>
      </v-navigation-drawer>

      <!----sidebar menu drawer end----->
      <v-app-bar
        flat
        class="header-card py-4"
        :class="stickyHeader ? 'sticky' : ''"
      >
        <v-container class="py-0">
          <v-toolbar class="h-auto d-flex">
            <Logo />
            <v-list class="d-md-flex d-none flex-wrap py-0 pl-16 ml-4 menu text-capitalize ml-auto">
            </v-list>

            <div class="ml-12 d-md-flex d-none">
<!--              &lt;!&ndash;-&#45;&#45;Login Button and Popup-&#45;&#45;&ndash;&gt;-->
<!--              <Login />-->
<!--              &lt;!&ndash;-&#45;&#45;Register Button and Popup-&#45;&#45;&ndash;&gt;-->
<!--              <Register />-->
            </div>
<!--            <Menu2Icon-->
<!--              class="d-md-none d-flex drawer-icon no-effect ml-auto mr-0"-->
<!--              @click.stop="drawer = !drawer"-->
<!--              size="30"-->
<!--            ></Menu2Icon>-->
          </v-toolbar>
        </v-container>
      </v-app-bar>
    </ClientOnly>
  </div>
</template>
