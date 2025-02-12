<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { AboutHistoryData } from '@/_mockApis/pages/about';
import { historySliderSettings, historySliderSettingsBreakpoints } from '@/_mockApis/pages/SliderSettings';
</script>
<template>
    <section class="history bg-lightprimarygray py-md-12 py-5 ">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="justify-space-between">
                    <v-col cols="12" md="4">
                        <h2 class="text-h2 text-dark  font-weight-bold pr-sm-10">Landing Pro History</h2>
                        <p class="text-body-1 text-muted my-4">
                            Sometimes by accident, sometimes chunks as necessary making this the first true generator
                        </p>
                    </v-col>
                    <v-col cols="12" md="7">
                        <carousel :settings="historySliderSettings" :breakpoints="historySliderSettingsBreakpoints"
                            class="">
                            <slide v-for="card in AboutHistoryData" :key="card.img">
                                <div class="text-left">
                                    <div class="text-h3 mb-2 font-weight-bold text-primary">{{ card.year }}</div>
                                    <p class="text-body-1 text-muted mb-10 pr-sm-5">{{ card.desc }}</p>
                                    <img :src="card.img" alt="image" class="w-100" />
                                </div>
                            </slide>
                            <template #addons>
                                <navigation class="navarrow mt-md-n3">
                                    <template #next>
                                        <span class="mt-sm-0 mt-16">
                                            <CircleArrowRightIcon class="text-primary mt-md-0 mt-7 pa-sm-0 pa-0" size="55" stroke-width="0.5" />
                                        </span>
                                    </template>
                                    <template #prev>
                                        <span class="mt-sm-0 mt-16">
                                            <CircleArrowLeftIcon class="text-primary mt-md-0 mt-7 pa-sm-0 pa-0" size="55" stroke-width="0.5" />
                                        </span>
                                    </template>
                                </navigation>
                            </template>
                        </carousel>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>