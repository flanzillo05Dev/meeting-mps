<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { HeroBannersData } from '@/_mockApis/demos/nft';
import { SliderSettings } from '@/_mockApis/demos/Slider';
//  const loading=ref(true);
</script>
<template>
    <section class="pb-8">
        <v-container>
            <v-row class="align-center">
                <v-col cols="12" sm="5">
                    <div class="hero-content position-relative">
                            <h1 class="text-h1 text-sm-left text-center text-dark" data-aos="fade-up" data-aos-delay="200"
                                data-aos-duration="1000">
                                Buy Sell NFT From The World’s Top Artists
                            </h1>

                            <div class="d-flex justify-sm-start justify-center mt-10" data-aos="fade-up"
                                data-aos-delay="400" data-aos-duration="1000">
                                <v-btn color="primary" size="x-large" class="mr-4" variant="flat">Explore</v-btn>
                                <v-btn color="primary" size="x-large" variant="outlined">Create</v-btn>
                            </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="7" class="text-sm-right">
                    <div class="hero-slider position-relative">
                        <carousel :settings="SliderSettings" class="overflow-hidden">
                            <slide v-for="card in HeroBannersData" :key="card.img">
                                <div class="main-banner position-relative mt-sm-0 mt-5">
                                    <div class="rounded-md overflo-hidden"><img :src="card.img" :alt="card.img" class="w-100" /></div> 
                                    <div class="banner-content px-sm-8 px-5">
                                        <div class="d-flex justify-space-between text-surface">
                                            <div class="text-left ">
                                                <div class="d-flex align-center text-white mb-2"><img src="/images/icon/icon-check.svg"
                                                        alt="" class="me-2 ">{{ card.head1 }}</div>
                                                <h2 class="text-h2 text-white">{{ card.title1 }}</h2>
                                            </div>
                                            <div class="text-left mt-2">
                                                <div class="text-uppercase  font-weight-bold pb-2 text-white">{{ card.head2 }}</div>
                                                <h2 class="text-caption  font-weight-bold text-info">{{ card.title2 }}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>