<script setup lang="ts">
import { ConferenceSocialLinksIcons } from '@/_mockApis/footer/ConferenceFooter';
import { ConferenceFooterFeatureLinks, ConferenceFooterResourceLinks, ConferenceFooterPlateformLinks } from '@/_mockApis/footer/ConferenceFooter';
</script>
<template>
    <div class="conference-footer footer-dark-v3 bg-themecolordark pt-md-12 pt-5 pb-md-8 pb-4 position-relative">

        <v-container class="pb-3">
            <v-row class="justify-space-between">
                <v-col cols="12" md="7">
                    <div class="d-sm-flex justify-space-between">
                        <div class="text-muted mb-4 d-flex align-start ">
                            <MapPinIcon size="22" class="mr-3" />
                            221b Baker St, London NW1 6XE,<br> United Kingdom
                        </div>
                        <div class="text-muted mb-4 d-flex align-start ">
                            <PhoneCallIcon size="22" class="mr-3" />
                            +1 (123) 123 1234
                        </div>
                        <div class="text-muted mb-4 d-flex align-start">
                            <MailIcon size="22" class="mr-3" />
                            info@landingpro.com
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="5">
                    <div class="">
                        <ul class="d-flex align-center justify-md-end">
                            <li v-for="social in ConferenceSocialLinksIcons" class="mr-4">
                                <NuxtLink :to="social.url" class="text-decoration-none text-muted">
                                    <component :is="social.icon" stroke-width="2" size="22" />
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
            <div class="mt-md-8 mt-5 border-top-dark pt-md-15 pt-8">
                <div class="pt-md-5">
                    <v-row>
                        <v-col cols="6" md="2" sm="4">
                            <div class="font-weight-medium mb-5">Features</div>
                            <ul>
                                <li class="mb-2" v-for="link in ConferenceFooterFeatureLinks" :key="link.title">
                                    <NuxtLink :to="link.url"
                                        class="text-muted text-decoration-none text-capitalize font-weight-regular position-relative ">
                                        {{ link.title }}
                                        <v-chip v-if="link.tag" class="bg-success">hiring</v-chip>
                                    </NuxtLink>
                                </li>
                            </ul>

                        </v-col>
                        <v-col cols="6" md="2" sm="4">
                            <div class="font-weight-medium mb-5">Resources</div>
                            <ul>
                                <li class="mb-2" v-for="link in ConferenceFooterResourceLinks" :key="link.title">
                                    <NuxtLink :to="link.url"
                                        class="text-muted text-decoration-none text-capitalize font-weight-regular position-relative ">
                                        {{ link.title }}
                                        <v-chip v-if="link.tag" class="bg-success">hiring</v-chip>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="6" md="3" sm="4">
                            <div class="font-weight-medium mb-5">Plateform</div>
                            <ul>
                                <li class="mb-2" v-for="link in ConferenceFooterPlateformLinks" :key="link.title">
                                    <NuxtLink :to="link.url"
                                        class="text-muted text-decoration-none text-capitalize font-weight-regular position-relative ">
                                        {{ link.title }}
                                        <v-chip v-if="link.tag" class="bg-success">hiring</v-chip>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="12" md="5">
                            <div class="newsletter">
                                <div class="mb-6">Sign up for updates</div>
                                <div class="d-flex align-center flex-fill ">
                                    <v-text-field variant="solo" density="comfortable" color="primary"
                                        class="position-relative bg-inputdark rounded-md pr-9"
                                        placeholder="Enter Your Email address" single-line hide-details>
                                        <v-btn color="primary" :ripple="false" size="large"
                                            class="no-effect position-absolute right-0 top-50 mt-n2 mr-n15 px-0"
                                            variant="text" density="compact">
                                            <SendIcon class="text-muted" size="22" />
                                        </v-btn>
                                    </v-text-field>
                                </div>
                            </div>
                            <div class="mt-8 mb-6">
                                <div class="mb-6">Get App</div>
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <NuxtLink to="/">
                                            <img src="/images/download/apple-3.png" alt="apple app" class="mr-4" />
                                        </NuxtLink>
                                        <NuxtLink to="/">
                                            <img src="/images/download/gp-3.png" alt="google pay app" />
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <div class="pt-md-10 d-sm-flex align-center justify-space-between text-center text-md-start">
                        <p class="text-muted ">© Copyright 2024. All rights reserved by LandingPro Theme.</p>
                        <ul
                            class="list-unstyled mb-0 d-flex align-center justify-center justify-space-md-start  mt-sm-0 mt-3">
                            <li><NuxtLink to="/" class="text-muted text-decoration-none mr-3">Privacy</NuxtLink></li>
                            <li><NuxtLink to="/" class="text-muted text-decoration-none mr-3">Cookies</NuxtLink></li>
                            <li><NuxtLink to="/" class="text-muted  text-decoration-none">Disclaimer</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </v-container>
        <div class="position-absolute top-0 mt-16 d-lg-block d-none z-index-n1">
            <img src="/images/shape/footer-v3-shapeline.png" class="mt-8" />
        </div>
    </div>
</template>