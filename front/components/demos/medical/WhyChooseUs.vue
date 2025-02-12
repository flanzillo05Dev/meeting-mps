<script setup lang="ts">
import {WhyChooseUsData} from '@/_mockApis/demos/medical'
</script>
<template>
    <div class="py-md-12 py-5 position-relative">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="align-center justify-lg-space-between justify-center">
                    <v-col cols="12" lg="5" sm="6">
                        <div class="position-relative text-md-left text-center">
                            <img src="/images/medical/choose.jpg" alt="image" class="img-fluid rounded-md" />
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                            class="text-sm-left text-center">
                            <h2 class="text-h2 text-dark mb-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Wy Choose Us?</h2>
                            <p class="text-muted text-body-1 mb-11" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <div class="mt-6 text-sm-left text-center" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                                <div class="d-sm-flex d-block align-center mb-md-12 mb-8" v-for="item in WhyChooseUsData" :key="item.title" >
                                    <v-avatar class="rounded-shaped bg-lightinfo mb-sm-0 mb-4" size="75">
                                        <img :src="item.img" height="42" width="42">
                                    </v-avatar>
                                    <div class="ml-6">
                                        <h4 class="text-h4 font-weight-bold text-dark mb-2">{{ item.title }}</h4>
                                        <p class="text-subtitle-1 text-muted ">{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>