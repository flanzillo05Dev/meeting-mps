<script setup lang="ts">
import {BuildFeaturesData} from '@/_mockApis/demos/corporate';
</script>
<template>
    <div class="bg-lightmuted py-md-15 py-8">
        <div class="py-md-15 py-sm-8">
            <v-container>
                <v-row class="justify-center">
                    <v-col cols="12" sm="8">
                        <div class="text-center">
                            <div class="d-flex align-center mb-5 justify-center"  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                <span class="bg-success pa-2 rounded-circle mr-2"></span>
                                <h6 class="text-subtitle-1 text-dark font-weight-bold" >build everything</h6>
                            </div>
                            <h2 class="text-h2 text-dark mb-md-12 mb-6" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Build amazing websites & landing pages with ease using
                                Landingpro</h2>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="justify-center">
                    <v-col cols="12" md="4" sm="6" v-for="card in BuildFeaturesData" :key="card.title">
                        <v-card elevation="0" class="text-center py-md-15 py-6 px-md-8 px-4  rounded-md" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <img :src="card.icon" height="40" width="40">
                            <h4 class="text-h4 text-dark font-weight-bold my-sm-6 my-4 px-md-6">{{ card.title }}</h4>
                            <p class="text-muted mb-sm-6 mb-4">{{ card.desc }}</p>
                            <NuxtLink to="/"
                                class="text-decoration-none d-flex justify-center align-center text-primary hover-primary">
                                Get Started
                                <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                            </NuxtLink>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>