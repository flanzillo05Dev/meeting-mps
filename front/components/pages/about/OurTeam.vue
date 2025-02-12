<script setup lang="ts">
import { OurTeamData } from '@/_mockApis/pages/about';
</script>
<template>
    <div class="team bg-lightprimarygray py-md-12 py-5 ">
        <div class="py-sm-5">
            <v-container>
                <div class="text-center">
                    <h2 class="text-h2 text-dark mb-3"  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Our Team</h2>
                    <p class="text-body-1 text-muted" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Dedicated professionals of LandingPro</p>
                </div>
                <v-row>
                    <v-col cols="12" lg="3" md="4" sm="6" v-for="card in OurTeamData" :key="card.name" class="mt-sm-8 mt-5">
                        <div class="hover-card overflow-hidden rounded-md lh-10 mb-7">
                            <img :src="card.img" :alt="card.img" class="zoom-in w-100" />
                        </div>
                        <h2 class="text-h5  text-dark font-weight-bold">{{ card.name }}</h2>
                        <p class="text-muted">{{ card.designation }}</p>
                    </v-col>
                </v-row>

                <div class="have-question bg-primary  py-sm-15 py-7 px-lg-16 px-4 mt-12 rounded-md position-relative">
                    <img src="/images/shape/shape-c2a.png"  class="shape position-absolute shape"/>
                    <div class="px-sm-6 px-3">
                        <v-row>
                            <v-col cols="12" md="6">
                                <h2 class="text-h2 mb-6 text-sm-start text-center text-white">Have a Question?</h2>
                                <p class="text-h5 font-weight-regular text-sm-start text-center  text-white">
                                    We are a dedicated team of passionate product managers, full stackdevelopers, UX/UI
                                    designers, QA engineers and marketing
                                </p>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="d-sm-flex text-center justify-md-end justify-center">
                                    <img src="/images/aboutpage/c2a/headoffice.png" alt="headoffice" class="" />
                                    <img src="/images/aboutpage/c2a/location.png" alt="location" class="" />
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <div class="d-sm-flex justify-md-end justify-sm-start justify-center position-relative">
                                    <div class="mr-sm-13">
                                        <div class="text-uppercase text-body-1">Phone</div>
                                        <NuxtLink to="tel:(630) 0536 220"
                                            class="text-caption font-weight-bold text-white text-decoration-none lh-normal">+(630) 0536 220
                                        </NuxtLink>
                                    </div>
                                    <div>
                                        <div class="text-uppercase text-18 mt-sm-0 mt-4">EMAIL</div>
                                        <NuxtLink to="mailto:info@landingpro.com"
                                            class="text-caption font-weight-bold text-white text-decoration-none lh-normal">
                                            info@landingpro.com
                                        </NuxtLink>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-container>
        </div>
    </div>
</template>