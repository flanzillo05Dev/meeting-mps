<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { Featureslider } from '@/_mockApis/demos/travel';
import { FeaturesliderSettings, FeaturesliderBreakpoints } from '@/_mockApis/demos/Slider';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon} from "vue-tabler-icons";
</script>
<template>
    <div class="features position-relative py-sm-15 py-3">
        <v-container>
            <v-card elevation="0" rounded="md" class="pt-md-15 pt-8 bg-surface">
                <div class="py-md-7 py-3">
                    <h2 class="text-h2 text-dark text-center mb-4">Features</h2>
                    <div class="mt-md-10 mt-6">
                        <carousel :settings="FeaturesliderSettings" :breakpoints="FeaturesliderBreakpoints"
                            class="">
                            <slide v-for="card in Featureslider" :key="card.title">
                                <div class="text-center px-lg-15 px-sm-8 px-6">
                                    <v-avatar size="90" class="bg-lightprimary"><img :src="card.img"  width="55" height="55" alt="" /></v-avatar>
                                    <h4 class="text-h4 font-weight-bold text-dark mb-2 mt-6">{{card.title}}</h4>
                                    <p class="text-muted px-md-6">{{card.subtitle}}</p>
                                </div>
                            </slide>
                            <template #addons>
                                <navigation class="navarrow">
                                    <template #next>
                                        <span>
                                            <ArrowNarrowRightIcon class="text-primary" size="35" stroke-width="1" />
                                        </span>
                                    </template>
                                    <template #prev>
                                        <span>
                                            <ArrowNarrowLeftIcon class="text-primary" size="35" stroke-width="1" />
                                        </span>
                                    </template>
                                </navigation>
                            </template>
                        </carousel>
                    </div>
                </div>
            </v-card>
        </v-container>
    </div>
</template>