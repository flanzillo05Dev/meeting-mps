<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import { LiveAnywhereSlider } from '@/_mockApis/demos/travel';
import { LeaveAnywheresliderSettings, LeaveAnywhereBreakpoints } from '@/_mockApis/demos/Slider';
</script>
<template>
    <div class="position-relative py-md-15 py-8">
        <v-container>
            <div elevation="0">
                <h2 class="text-h2 text-dark text-center mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Live anywhere</h2>
                <div class="mt-md-10 mt-6">
                    <carousel :settings="LeaveAnywheresliderSettings" :breakpoints="LeaveAnywhereBreakpoints" class="">
                        <slide v-for="card in LiveAnywhereSlider" :key="card.name">
                            <div class="text-left mx-3">
                                <div class="hover-card overflow-hidden rounded-md lh-10 mb-4 position-relative">
                                    <NuxtLink to="#">
                                        <img :src="card.image" :alt="card.image" class="zoom-in w-100" />
                                    </NuxtLink>
                                    <div
                                        class="position-absolute top-0 right-0 bg-primary py-2 font-weight-medium rounded-md mt-2 mr-3 text-subtitle-1 px-4">
                                        {{ card.price }}</div>
                                </div>
                                <div class="ms-2">
                                    <h4 class="text-h4 font-weight-bold text-dark ">{{ card.name }}</h4>
                                    <p class="text-muted">{{ card.desc }}</p>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <div class="d-flex justify-center mt-16">
                    <v-btn variant="outlined" size="large" class="px-8" color="primary">view more</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>