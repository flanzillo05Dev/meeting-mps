<script setup lang="ts">
import { ref } from 'vue';
const multiple = ref([0, 1]);
</script>
<template>
    <v-expansion-panels v-model="multiple" multiple>
        <v-expansion-panel elevation="0">
            <v-expansion-panel-title>Item #1</v-expansion-panel-title>
            <v-expansion-panel-text class="text-subtitle-1"> Some content </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel elevation="0">
            <v-expansion-panel-title>Item #2</v-expansion-panel-title>
            <v-expansion-panel-text class="text-subtitle-1"> Some content </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel elevation="0">
            <v-expansion-panel-title>Item #3</v-expansion-panel-title>
            <v-expansion-panel-text class="text-subtitle-1"> Some content </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
