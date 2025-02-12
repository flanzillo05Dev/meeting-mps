<script setup lang="ts">
import { FeaturedPropertiesData } from '@/_mockApis/demos/realEstate';
import { HeartFilledIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="fearured-properties bg-light py-md-15 py-sm-8 py-4">
        <v-container>
            <h2 class="text-h2 text-dark mb-md-12 mb-8"  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Featured Properties</h2>
            <v-row>
                <v-col cols="12" md="4" sm="6" v-for="card in FeaturedPropertiesData" :key="card.title">
                    <v-card elevation="10"  rounded="ten" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <div class="hover-card overflow-hidden rounded-md lh-10  position-relative rounded-b-0">
                            <NuxtLink to="#">
                                <img :src="card.image" :alt="card.image" class="zoom-in w-100" />
                            </NuxtLink>
                            <div class="position-absolute top-0 left-0 font-weight-medium bg-white px-4 text-primary py-3 rounded-md ma-2">
                                {{ card.tag }}</div>
                            <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                <v-btn variant="plain" density="compact" :ripple="false" class="px-2 py-2 no-effect bg-white text-primary op-1"
                                    min-width="auto" height="auto">
                                    <HeartFilledIcon color="primary" stroke-width="1.5" size="20" />
                                </v-btn>
                            </div>
                        </div>
                        <div class="pa-7">
                            <div class="d-flex justify-space-between">
                                <div>
                                    <h4 class="text-h4 font-weight-bold text-dark lh-normal">{{ card.price }}</h4>
                                    <p class="text-muted">{{ card.title }}</p>
                                </div>
                                <v-chip class="bg-lightinfo font-weight-bold text-dark rounded-md pa-2 mt-2" height="auto" size="small" variant="tonal">{{ card.country }}</v-chip>
                            </div>
                            <div class="d-flex justify-space-between border-top mt-5 pt-5">
                                <div>
                                    <div class="d-flex align-items-center">
                                        <img src="/images/real-estate/svgs/bedroom.svg" class="me-2" alt="">
                                        <h5 class="mb-0 text-h5 font-weight-bold text-dark">{{ card.bedrooms }}</h5>
                                    </div>
                                    <p class="text-muted text-subtitle-1">Bedrooms</p>
                                </div>
                                <div>
                                    <div class="d-flex align-items-center">
                                        <img src="/images/real-estate/svgs/hot-tub.svg" class="me-2" alt="">
                                        <h5 class="mb-0 text-h5 font-weight-bold text-dark">{{ card.bathrooms }}</h5>
                                    </div>
                                    <p class="text-muted text-subtitle-1">Bathroom</p>
                                </div>
                                <div>
                                    <div class="d-flex align-items-center">
                                        <img src="/images/real-estate/svgs/bedroom.svg" class="me-2" alt="">
                                        <h5 class="mb-0 text-h5 font-weight-bold text-dark">{{ card.livingarea }}<sup>2</sup></h5>
                                    </div>
                                    <p class="text-muted text-subtitle-1">Living Area</p>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>