<script setup lang="ts">
import { Carousel, Slide, } from "vue3-carousel";
import { CategoryData } from '@/_mockApis/demos/course';
import { CategorySettings, CategorySettingsBreakpoints } from '@/_mockApis/demos/Slider';
</script>
<template>
    <div class="category position-relative py-md-12 py-5">
        <v-container>
            <v-row>
                <v-col cols="12" md="3">
                    <h2 class="text-h2 text-dark text-sm-left text-center" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        Explore by categories</h2>
                </v-col>
                <v-col cols="12" class="mt-n4">
                        <carousel :settings="CategorySettings" :breakpoints="CategorySettingsBreakpoints"
                            class="overflow-hidden">
                            <slide v-for="card in CategoryData" :key="card.title" class="">
                                <div class="carousel__item" >
                                    <v-card elevation="0" class="text-left px-sm-4 px-3 py-md-8 py-6 rounded-md">
                                            <img :src="card.img" alt="category" class="mb-5" />
                                            <h4 class="text-h4 text-dark lh-normal mb-2">{{ card.title }}</h4>
                                            <div class="text-muted">{{ card.desc }}</div>
                                    </v-card>
                                </div>
                            </slide>
                        </carousel>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>