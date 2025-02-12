<script setup lang="ts">
import { CheckIcon } from 'vue-tabler-icons';
import { BuildwebData } from '@/_mockApis/demos/itpage';
</script>
<template>
    <section class="py-md-12 py-5 mt-16">
        <div class="py-md-16 py-sm-5 mt-sm-16 mt-8">
            <v-container class="pt-sm-10">
                <v-row class="align-center justify-space-between">
                    <v-col cols="12" md="5">
                        <div>
                            <h2 class="text-h2 font-weight-bold mb-6">Build amazing websites and landing pages with ease using
                                Landingpro</h2>
                            <p class="text-muted mb-6 text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elited do eiusmod
                                tempor incididunt.</p>
                            <ul>
                                <li class="d-flex mb-3">
                                    <v-avatar class="bg-lightinfo mr-3" size="26">
                                        <CheckIcon class="text-primary  " size="12" stroke-width="4" />
                                    </v-avatar>
                                    <p class="">Easy Drag & Drop</p>
                                </li>
                                <li class="d-flex mb-3">
                                    <v-avatar class="bg-lightinfo mr-3" size="26">
                                        <CheckIcon class="text-primary  " size="12" stroke-width="4" />
                                    </v-avatar>
                                    <p class="">
                                        Powered by Elementor
                                    </p>
                                </li>
                                <li class="d-flex mb-3">
                                    <v-avatar class="bg-lightinfo mr-3" size="26">
                                        <CheckIcon class="text-primary  " size="12" stroke-width="4" />
                                    </v-avatar>
                                    <p class="">
                                        Powered by Elementor
                                    </p>
                                </li>
                            </ul>
                            <v-btn color="primary" size="large" class="mt-md-7 mt-5 px-9" variant="flat">
                                get started
                                <ChevronRightIcon size="18" class="ml-2" stroke-width="2.5" />
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="12" sm="6" v-for="item in BuildwebData" :key="item.title">
                                <v-card elevation="10" class="text-center text-sm-start rounded-md website-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                    <v-card-item class="pa-6">
                                        <div class="d-flex justify-center justify-sm-start mb-3">
                                            <img :src="item.img" height="42" width="42">
                                        </div>
                                        <h4 class="text-h4 text-dark font-weight-bold mb-md-5 mb-3 lh-normal">{{ item.title }}</h4>
                                        <p class="text-muted text-subtitle-1 mb-6">{{ item.desc }}</p>
                                        <NuxtLink :to="item.url"
                                            class="font-weight-medium text-decoration-none d-flex align-center text-primary card-link d-flex justify-center justify-sm-start">
                                            Get Started
                                            <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                                        </NuxtLink>
                                    </v-card-item>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>