<script setup lang="ts">
import { Carousel, Slide, } from "vue3-carousel";
import { CompanyLogos } from '@/_mockApis/demos/course';
import { CompanyLogoSettings, CompanyLogoBreakpoints } from '@/_mockApis/demos/Slider';
</script>
<template>
    <div class="companies py-md-12 py-0 position-relative">
        <v-container class="max-width-xl">
            <h5 class="text-center mb-7 text-h5 font-weight-regular  text-muted">Many schools, universities & online programs useing landing pro
            </h5>
            <div class="bg-lightinfo pa-md-11 pa-8 rounded-shaped">
                <carousel :settings="CompanyLogoSettings" :breakpoints="CompanyLogoBreakpoints" class="overflow-hidden">
                    <slide v-for="card in CompanyLogos" :key="card.img" class="">
                        <div class="carousel__item">
                            <div>
                                <NuxtLink :to="card.link">
                                    <img :src="card.img" alt="logos"/>
                                </NuxtLink>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </v-container>
    </div>
</template>