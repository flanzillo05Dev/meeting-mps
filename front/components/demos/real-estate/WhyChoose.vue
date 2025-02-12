<script setup lang="ts">
import { WhyChooseusData} from '@/_mockApis/demos/realEstate'
</script>
<template>
    <div class="why-choose pt-md-15 pt-sm-8 ">
        <v-container class="max-width-xl">
            <v-row class="justify-space-between align-center">
                <v-col cols="12" sm="6">
                    <div class="position-relative">
                        <img src="/images/real-estate/landingpro.jpg" alt="why choose" class="w-100" />
                        <div class="position-absolute over-card elevation-10 rounded-md overflow-hidden mt-md-0 mt-3" >
                            <div class="hover-card overflow-hidden rounded-md lh-10  position-relative rounded-b-0">
                                <NuxtLink to="#">
                                    <img src="/images/real-estate/property-2.jpg" class="zoom-in w-100" />
                                </NuxtLink>
                                <div
                                    class="position-absolute top-0 left-0 font-weight-medium bg-white px-4 text-primary py-3 rounded-md ma-2">
                                    Rent</div>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <v-btn variant="plain" density="compact" :ripple="false"
                                        class="px-2 py-2 no-effect bg-white text-primary op-1" min-width="auto"
                                        height="auto">
                                        <HeartFilledIcon color="primary" stroke-width="1.5" size="20" />
                                    </v-btn>
                                </div>
                            </div>
                            <div class="pa-4 bg-surface">
                                <div class="d-flex justify-space-between">
                                    <div>
                                        <h4 class="text-h4 font-weight-bold text-dark lh-normal">$460,300</h4>
                                        <p class="text-muted">Mithra Villa</p>
                                    </div>
                                    <v-chip class="bg-lightinfo font-weight-bold text-dark rounded-md pa-2 mt-2"
                                        height="auto" size="small" variant="tonal">California</v-chip>
                                </div>
                                <div class="mt-8 text-center">
                                    <v-btn size="large" color="primary" variant="outlined" class="px-8">more detail</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="5" sm="6">
                    <h2 class="text-h2 text-dark text-sm-left text-center mb-6 mt-sm-0 mt-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why People Choose Landingpro</h2>
                    <div class="pt-10 text-sm-left text-center"  >
                        <div class="d-sm-flex d-block align-center mb-md-12 mb-8" v-for="item in WhyChooseusData"
                            :key="item.title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <v-avatar class="" size="78">
                                <img :src="item.img" height="78" width="78">
                            </v-avatar>
                            <div class="ml-sm-6">
                                <h4 class="text-h4 font-weight-medium text-dark mb-2">{{ item.title }}</h4>
                                <p class="text-muted ">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
