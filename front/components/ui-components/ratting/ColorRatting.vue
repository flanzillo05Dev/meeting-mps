<script setup lang="ts">
import { ref } from "vue";
const rating2 = ref(3);
</script>
<template>
    <div class="text-center">
        <ClientOnly><v-rating v-model="rating2" color="primary"></v-rating></ClientOnly>
    </div>
</template>
