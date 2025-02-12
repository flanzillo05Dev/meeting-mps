<script setup lang="ts">
import { ref } from 'vue';
const reviewstar1 = ref(5);
</script>
<template>
    <div class="it-wrapper position-relative">
        <div class="banner-shape position-relative">
            <div class="it-banner position-relative bg-darkprimarygray">
                <div class="banner-bottom-line d-none d-lg-block">
                    <img src="/images/shape/shapeline-2.png" alt="" class="img-fluid">
                </div>
                <v-container class="position-relative z-index1">
                    <v-row class="align-center">
                        <v-col md="6">
                            <div class="text-sm-start text-center">
                                <h1 class="text-white text-h1 mb-8" data-aos="fade-right" data-aos-delay="200"
                                    data-aos-duration="1000">Amazingly fexible, customizable and easy to use</h1>
                                <v-btn size="large" class="bg-white text-primary px-8" variant="flat">
                                    get started
                                </v-btn>
                                <div class="mt-sm-16 mt-8">
                                    <ClientOnly><v-rating v-model="reviewstar1" hover density="compact" half-increments readonly
                                        color="warning" class="ml-n2"></v-rating></ClientOnly>
                                    <div class="mb-8 mt-5 pr-lg-16">
                                        <p class="pr-lg-16 text-body-1">It’s easy to set up and the support experience is the best and
                                            unparalleled
                                            comparatively.</p>
                                    </div>
                                    <img src="/images/it/wise.png" alt="logo" />
                                </div>
                            </div>
                        </v-col>
                        <v-col md="6">
                            <v-row class="justify-center position-relative">
                                <v-col cols="12" md="9">
                                    <div class="banner-circle d-none d-lg-block">
                                        <img src="/images/it/banner-circle.png" class="op-04" alt="">
                                    </div>

                                    <div class="banner-circle-line d-none d-lg-block">
                                        <img src="/images/it/banner-circle-lines.png" class="op-04" alt="">
                                    </div>
                                    <h4 class="text-h4 font-weight-bold  mb-5 text-white">Start the project</h4>
                                    <v-form class="banner-form">
                                        <v-row>
                                            <v-col cols="12" sm="6" class="pb-1">
                                                <v-text-field variant="solo" density="compact" color="primary" elevation="0"
                                                    placeholder="First name" hide-details   />
                                            </v-col>
                                            <v-col cols="12" sm="6" class="pb-1">
                                                <v-text-field variant="solo" density="compact" color="primary"
                                                    placeholder="Last name" hide-details  />
                                            </v-col>
                                            <v-col cols="12" sm="12" class="pb-1">
                                                <v-text-field variant="solo" density="compact" color="primary"
                                                    placeholder="youremail@website.com" hide-details  />
                                            </v-col>
                                            <v-col cols="12" sm="12" class="pb-1">
                                                <v-text-field variant="solo" density="compact" color="primary"
                                                    placeholder="Country" hide-details  />
                                            </v-col>
                                            <v-col cols="12" sm="12" class="pb-1">
                                                <v-textarea variant="solo" auto-grow  density="compact" 
                                                    placeholder="Let us know about your project" rows="5" color="primary"
                                                    row-height="40" hide-details  />
                                            </v-col>
                                            <v-col cols="12" class="pt-1">
                                                <div class="ml-n2">
                                                    <div class="d-flex align-center agree">
                                                        <v-checkbox class="text-white"></v-checkbox>
                                                        <div>
                                                            I have read and acknowledge the
                                                            <NuxtLink to="/" class=" opacity-1 text-white">
                                                                Terms and Conditions</NuxtLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" class="pt-0">
                                                <v-btn class="bg-warning " variant="flat" size="large"
                                                    block>submit
                                                    inquiry</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
</div></template>