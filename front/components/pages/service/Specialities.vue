<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import { SpecialitiesData } from '@/_mockApis/pages/service';
import { specialitiesSliderSettings, specialitiesSliderSettingsBreakpoints } from '@/_mockApis/pages/SliderSettings';
</script>
<template>
    <div class="border-bottom">
        <div class="specialities mx-auto py-md-12 py-5 px-3 ">
            <div class="py-md-10 py-sm-5">
                <h2 class="text-h2 mb-sm-8 mb-4 pl-3" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    Specialities</h2>
                <div>
                    <carousel :settings="specialitiesSliderSettings" :breakpoints="specialitiesSliderSettingsBreakpoints"
                        class="overflow-hidden">
                        <slide v-for="card in SpecialitiesData" :key="card.img">
                            <v-card elevation="0" :class="'position-relative color-box mx-3 rounded-md  bg-' + card.bgcolor">
                                <img :src="card.img" alt="shape" :class="'position-absolute ' + card.classname" />
                                <div class="text-left">
                                    <NuxtLink to="/"
                                        :class="'text-decoration-none px-3 rounded-md py-1 text-subtitle-1 font-weight-medium bg-white text-' + card.textcolor">
                                        {{
                                            card.button }}</NuxtLink>
                                    <h4 class="text-h4 mt-sm-10 mt-5 pb-sm-5">{{ card.title }}</h4>
                                </div>
                            </v-card>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>