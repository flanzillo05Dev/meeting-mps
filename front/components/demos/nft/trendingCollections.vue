<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { TrendingCollectionData } from '@/_mockApis/demos/nft';
import { curoselSettings, curoselSettingsBreakpoints } from '@/_mockApis/demos/Slider';
</script>
<template>
    <section class="trending-collections bg-lightprimarygray py-md-12 py-5 mt-14">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="justify-center">
                    <v-col cols="12" md="7">
                        <h2 class="text-h2 text-center text-dark mb-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Trending Collections</h2>
                        <p class="text-h5 font-weight-regular text-center text-muted" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">We offer you a new generation of task and project
                            management
                            system. Plan, manage and track.</p>
                    </v-col>
                    <v-col cols="12">
                        <div class="position-relative mt-7">
                            <carousel :settings="curoselSettings" :breakpoints="curoselSettingsBreakpoints"
                                class="overflow-hidden">
                                <slide v-for="card in TrendingCollectionData" :key="card.img">
                                    <div class="trending-coll-card">
                                        <v-card elevation="0">
                                            <v-card-item class="pa-3 pb-2">
                                                <div class="d-flex align-center">
                                                    <v-avatar size="30" class="me-2">
                                                        <img :src="card.profileicon" :alt="card.profileicon" width="30" />
                                                    </v-avatar>
                                                    <p class="text-subtitle-1">{{ card.title }}</p>
                                                    <p class="text-subtitle-1 text-primary font-weight-bold ml-auto">{{
                                                        card.price }}</p>
                                                </div>
                                                <div class="mt-4 position-relative">
                                                    <div class="rounded-md overflow-hidden">
                                                        <img :src="card.img" :alt="card.img"  class="w-100"/>
                                                    </div>
                                                    <v-btn class="position-absolute" size="small" color="primary"
                                                        :to="card.btnlink">Place a bid</v-btn>
                                                </div>
                                            </v-card-item>
                                        </v-card>
                                    </div>
                                </slide>
                                <template #addons>
                                    <Pagination  class="mt-sm-16 mt-6"/>
                                </template>
                            </carousel>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>