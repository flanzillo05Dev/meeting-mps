<script setup lang="ts">
import WhiteLogoIcon from "@/layouts/logo/WhiteLogoIcon.vue";
import { ConferenceSocialLinksIcons } from '@/_mockApis/footer/ConferenceFooter';
import { ConferenceFooterFeatureLinks, ConferenceFooterResourceLinks, ConferenceFooterPlateformLinks } from '@/_mockApis/footer/ConferenceFooter';
</script>
<template>
    <div class="it-footer conference-footer bg-themecolordark pt-md-16 pt-8 pb-md-10 pb-5 position-relative">
        <div class="it-footer-bg"></div>
        <div class="py-md-4 py-sm-3">
            <v-container class="pb-3">
                <div class="border-bottom-dark pb-6 position-relative z-index1">
                    <v-row class="justify-space-between align-center">
                        <v-col cols="3" sm="6">
                            <WhiteLogoIcon />
                        </v-col>
                        <v-col cols="9" sm="6">
                            <div class="">
                                <ul class="d-flex align-center justify-end">
                                    <li v-for="social in ConferenceSocialLinksIcons" class="ml-4">
                                        <NuxtLink :to="social.url" class="text-decoration-none text-surface">
                                            <component :is="social.icon" stroke-width="2" size="22" />
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <v-row class="pt-md-16 pt-8 mt-md-3">
                    <v-col cols="6" lg="3" md="3" sm="4">
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
                    <v-col cols="6" lg="2" md="2" sm="4">
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
                    <v-col cols="6" lg="3" md="3" sm="4">
                        <div class="font-weight-medium mb-5">Platform</div>
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
                    <v-col cols="12" lg="4" md="4" sm="12">
                        <div class="newsletter">
                            <div class="mb-6">Sign up for updates</div>
                            <div class="d-flex align-center flex-fill ">
                                <v-text-field variant="outlined" density="comfortable" color="primary"
                                    class="position-relative rounded-md"
                                    placeholder="Enter Your Email address" single-line hide-details>
                                    <v-btn color="primary" :ripple="false" size="large"
                                        class="no-effect position-absolute right-0 mr-n3 px-0 mt-n1 " variant="text"
                                        density="compact">
                                        <SendIcon class="text-primary" size="22" />
                                    </v-btn>
                                </v-text-field>
                            </div>
                            <p class="text-muted mt-6">© Copyright 2024. All rights reserved by LandingPro Theme.</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>