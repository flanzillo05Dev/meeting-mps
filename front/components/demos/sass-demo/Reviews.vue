<script setup  lang="ts">
import { ReviewsData } from '@/_mockApis/demos/sass';
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { SassReviewSlider } from '@/_mockApis/demos/Slider';
import { CircleArrowLeftIcon, CircleArrowRightIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="reviews pt-md-15 pt-8 pb-md-15 pb-sm-8 pb-16">
        <v-container>
            <div class="text-center">
                <h2 class="text-h2 text-dark mb-6">Reviews</h2>
                <v-row class="justify-center">
                    <v-col cols="12" sm="9">
                        <carousel id="review" :settings="SassReviewSlider" class="text-left">
                            <slide v-for="card in ReviewsData" :key="card.review" class="overflo-hidden">
                                <div class="text-center">
                                    <p class="text-h5 font-weight-regular text-muted lh-30">{{ card.review }}</p>
                                    <div class="d-flex align-center justify-center mt-md-10 mt-8">
                                        <v-avatar size="70">
                                            <img :src="card.img" alt="icon" width="70" height="70" />
                                        </v-avatar>
                                        <div class="ml-4 text-left">
                                            <h5 class="text-h5  text-dark">{{ card.name }}</h5>
                                            <p class="text-body-1 text-muted">{{ card.desg }}</p>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <template #addons>
                                <navigation class="navarrow mt-md-n3">
                                    <template #next>
                                        <span class="mt-sm-0 mt-16">
                                            <CircleArrowRightIcon class="text-primary op-03 mt-sm-0 mt-7 pa-sm-0 pa-2" size="55" stroke-width="0.5" />
                                        </span>
                                    </template>
                                    <template #prev>
                                        <span class="mt-sm-0 mt-16">
                                            <CircleArrowLeftIcon class="text-primary op-03 mt-sm-0 mt-7 pa-sm-0 pa-2" size="55" stroke-width="0.5" />
                                        </span>
                                    </template>
                                </navigation>
                            </template>
                        </carousel>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>