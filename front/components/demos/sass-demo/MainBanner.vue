
<script setup lang="ts">
import { SassSolutionData } from '@/_mockApis/demos/sass';
</script>
<template>
    <div class="sass-banner bg-primary py-8 py-md-16 overflow-hidden position-relative mt-95">
        <v-container>
            <div class="pulse-animation2">
                <div class="pulse2">
                    <div class="ring2"></div>
                    <div class="ring2"></div>
                    <div class="ring2"></div>
                    <div class="ring2"></div>
                </div>
            </div>
            <v-row class="align-center justify-space-between">
                <v-col cols="12" md="5">
                    <div class="sass-banner-img position-relative">
                        <img src="/images/sass/sass-banner.jpg" class="w-100 position-relative z-index1 rounded-md" />
                        <div class="pulse-animation">
                            <div class="pulse">
                                <div class="ring"></div>
                                <div class="ring"></div>
                                <div class="ring"></div>
                                <div class="ring"></div>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="text-md-left text-center">
                        <h1 class="text-h1 text-white mb-6 lh-60" data-aos="fade-up" data-aos-delay="200"
                            data-aos-duration="1000">Task Management AssistantYou Gonna Love</h1>
                        <p class="text-body-1 text-white op-07 mb-sm-12 mb-6" data-aos="fade-up" data-aos-delay="400"
                            data-aos-duration="1000">We offer you a new generation of task and project
                            management system. Plan, manage and track all your tasks in one flexible software purus pretium!
                        </p>
                        <div class="d-sm-flex justify-md-start justify-center d-block" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            <v-btn class="bg-white text-primary mr-sm-4 mb-sm-0 mb-3 px-10" variant="flat" size="large">get
                                started</v-btn>
                            <v-btn class="px-10 bg-trans" variant="outlined" size="large">start 30 days trial</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <!---Sass Solution-->
            <div class="pt-md-16 mt-md-16 mt-8">
                <v-row class="justify-center mt-4">
                    <v-col cols="12" md="7">
                        <h2 class="text-h2 text-center text-white">Saas Solutions for your Business Grow on time</h2>
                    </v-col>
                </v-row>
                <v-row class="pt-sm-16 pt-8">
                    <v-col cols="12" md="3" sm="6" v-for="card in SassSolutionData" :key="card.title" class="mb-sm-0 mb-4"
                        data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <div class="text-sm-left text-center">
                            <div class="d-sm-flex d-block mb-sm-10 mb-0">
                                <img :src="card.img" alt="icon" width="60" class="me-sm-8 me-0" />
                                <h3 class="text-caption font-weight-bold text-white pr-md-5 lh-30">{{ card.title }}</h3>
                            </div>
                            <p class="text-white op-07 lh-30">{{ card.desc }}</p>
                        </div>
                    </v-col>
                </v-row>
        </div>
    </v-container>
</div></template>