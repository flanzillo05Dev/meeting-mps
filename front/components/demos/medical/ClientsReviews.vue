<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { ClientReviewData } from '@/_mockApis/demos/medical';
import { ClientsReviewSettings } from '@/_mockApis/demos/Slider';
</script>
<template>
    <div class="clients-review py-md-12 py-5 position-relative">
        <div class="py-md-10 py-sm-5 mb-mb-0 mb-7">
            <v-container>
                <h2 class="text-center text-h2 text-dark font-weight-bold mb-md-10 mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Client’s Review</h2>
                <v-row class="text-md-left text-center justify-center">
                    <v-col cols="12" lg="9" md="10">
                        <v-card elevation="10" rounded="shaped">
                            <div class="review-box position-relative">
                                <Carousel id="review" :settings="ClientsReviewSettings"  class="text-left">
                                    <Slide v-for="card in ClientReviewData.slice(0, 3)" :key="card.review" class="overflow-hidden">
                                        <div class="carousel__item ">
                                            <ClientOnly><v-rating v-model="card.star" hover density="compact" half-increments readonly
                                               color="dark" class="mb-7 ml-n1"></v-rating></ClientOnly>
                                            <p class="text-muted mb-sm-10 mb-5 ">{{ card.review }}</p>
                                            <h5 class="text-h5 font-weight-bold text-dark">{{ card.name }}</h5>
                                            <p class="text-muted">{{ card.position }}</p>
                                        </div>
                                   </Slide>
                                <template #addons>
                                    <Pagination />
                                </template>
                            </Carousel>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>