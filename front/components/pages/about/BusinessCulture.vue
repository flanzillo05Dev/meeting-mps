

<script setup lang="ts">
import { CheckIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="business-culture  py-md-12 py-5 ">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="justify-space-between align-center"> 
                    <v-col cols="12" md="5">
                        <div class="position-relative">
                            <img src="/images/aboutpage/business-culture/business-culture.jpg"  alt="banner" class="w-100 rounded-md"/>
                            <div class="business-box position-absolute bg-primary pa-4 pa-md-6 rounded-md text-center text-lg-start">
                                <h2 class="font-weight-bold text-h1 mb-sm-3 text-white">13+</h2>
                                <p class="text-subtitle-1 font-weight-bold">YEARS OF EXPERIENCE</p>
                            </div>
                        </div>  
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="text-center text-md-start" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <h2 class="text-h2 text-dark font-weight-bold mb-4">Business Culture</h2>
                            <p class="text-muted text-body-1">We are a dedicated team of passionate product managers, full stack developers, UX/UI designers, QA engineers and marketing experts helping businesses of every size — from new startups</p>
                            <v-row class="mt-6 justify-md-start justify-center">
                                <v-col cols="12" sm="5">
                                    <div class="d-flex">
                                        <v-avatar size="30" color="lightprimary" class="me-4">
                                            <CheckIcon stroke-width="3" size="18" class="text-primary"/>
                                        </v-avatar>
                                        <div>
                                            <p class="text-muted text-left">Vestibulum non sapien mattis commodo.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-8">
                                        <v-avatar size="30" color="lightprimary" class="me-4">
                                            <CheckIcon stroke-width="3" size="18" class="text-primary"/>
                                        </v-avatar>
                                        <div>
                                            <p class="text-muted text-left ">Quisque pretium erat acdui posuere.</p>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="5">
                                    <div class="d-flex">
                                        <v-avatar size="30" color="lightprimary" class="me-4">
                                            <CheckIcon stroke-width="3" size="18" class="text-primary"/>
                                        </v-avatar>
                                        <div>
                                            <p class="text-muted text-left ">Donec luctus tincidunt ornare.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-8">
                                        <v-avatar size="30" color="lightprimary" class="me-4">
                                            <CheckIcon stroke-width="3" size="18" class="text-primary"/>
                                        </v-avatar>
                                        <div>
                                            <p class="text-muted text-left ">Fusce eleifend vitae eleifend ullamcor.</p>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                       
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>