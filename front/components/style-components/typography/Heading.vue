<script setup lang="ts">
import { ref } from "vue";
const headings = ref([
    ['h1.Heading', 'text-h1','font size: 48 | line-height: 58 | font weight: 700'],
    ['h2.Heading', 'text-h2','font size: 38 | line-height: 48 | font weight: 700'],
    ['h3.Heading', 'text-h3','font size: 32 | line-height: 48 | font weight: 600'],
    ['h4.Heading', 'text-h4','font size: 22 | line-height: 32 | font weight: 500'],
    ['h5.Heading', 'text-h5','font size: 20 | line-height: 30 | font weight: 500'],
    ['h6.Heading', 'text-h6','font size: 16 | line-height: 19.2 | font weight: 500'],
]);   

const subtext = ref(
    [
        ['Subtitle 1.', 'text-subtitle-1',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 14 | line-height: 17.6 | font weight: 400'],
        ['Subtitle 2.', 'text-subtitle-2',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 12 | line-height: 16 | font weight: 400'],
        ['Body 1.', 'text-body-1',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 18 | line-height: 28 | font weight: 400'],
        ['Body 2.', 'text-body-2',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 17 | line-height: 20 | font weight: 400'],
        ['OVERLINE.', 'text-overline letter-spacing-0',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 12 | line-height: 32 | font weight: 400']
    ]
)
</script>
<template>
    <div class="d-flex flex-column gap-1">
        <v-card variant="outlined" v-for="[name, cls,val] in headings" :key="name" class="my-3 pa-6">
            <div :class="[cls, '']">{{ name }}</div>
            <div class="text-subtitle-1 ">
                <div class="font-weight-medium">{{ val }}</div>
            </div>
        </v-card>
    </div>

    <div class="d-flex flex-column gap-1">
        <v-card variant="outlined" v-for="[name1, cls1,val1,prop] in subtext" :key="name1" class="my-3 pa-6">
            <div :class="[cls1, '']">{{ name1 }} <span>{{ val1 }}</span></div>
            <div class="text-subtitle-1 ">
                <div class="text-subtitle-1">{{ prop }}</div>
            </div>
        </v-card>
    </div>
</template>
