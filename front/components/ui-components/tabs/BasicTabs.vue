<script setup lang="ts">
import { ref } from "vue";
const tab = ref(null);
</script>
<template>
    <ClientOnly><v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one" class="no-effect">Item One</v-tab>
        <v-tab value="two" class="no-effect">Item Two</v-tab>
        <v-tab value="three" class="no-effect">Item Three</v-tab>
    </v-tabs></ClientOnly>
    <v-divider></v-divider>
    <v-card-text class="bg-grey100 mt-4 rounded-md">
        <v-window v-model="tab">
            <v-window-item value="one">
               Item One
            </v-window-item>
            <v-window-item value="two">
                Item Two
            </v-window-item>
            <v-window-item value="three">
                 Item Three
            </v-window-item>
        </v-window>
    </v-card-text>
</template>
