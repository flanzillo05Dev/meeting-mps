<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { TestimonialsData } from '@/_mockApis/demos/travel';
import { TestimonialsSlider } from '@/_mockApis/demos/Slider';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "vue-tabler-icons";
</script>
<template>
    <div class="testimonials position-relative py-md-15 py-8">
        <v-container>
            <v-row class="align-center justify-space-between">
                <v-col cols="12" md="6">
                    <h2 class="text-h2 text-dark mb-4">Testimonials</h2>
                    <div>
                        <carousel :settings="TestimonialsSlider" class="">
                            <slide v-for="card in TestimonialsData" :key="card.name">
                                <div class="text-left">
                                    <p class="text-muted text-h4 font-weight-regular">{{ card.review }}</p>
                                    <div class="d-flex align-center mt-8">
                                        <v-avatar size="55"><img :src="card.user" width="55" height="55"
                                                alt="" /></v-avatar>
                                        <div class="ml-6">
                                            <ClientOnly><v-rating v-model="card.star" hover density="compact" half-increments readonly
                                                color="warning" size="small" class="ml-n1"></v-rating></ClientOnly>
                                            <h5 class="text-h5 text-dark font-weight-medium mt-n2">{{ card.name }}</h5>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <template #addons >
                                <navigation class="navarrow">
                                    <template #next >
                                        <span>
                                            <ArrowNarrowRightIcon class="text-primary nxt" size="32" stroke-width="0.8" />
                                        </span>
                                    </template>
                                    <template #prev >
                                        <span>
                                            <ArrowNarrowLeftIcon class="text-primary prv" size="32" stroke-width="0.8" />
                                        </span>
                                    </template>
                                </navigation>
                            </template>
                        </carousel>
                    </div>
                </v-col>
                <v-col cols="12" md="5">
                    <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" class="text-center"> 
                        <img src="/images/travel/testimonials.png" class="img-fluid rounded-md" alt="testomonial">
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>