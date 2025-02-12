<script setup lang="ts">
import WhiteLogo from "@/layouts/logo/WhiteLogo.vue"
import { ConferenceFooterFeatureLinks, ConferenceFooterResourceLinks, ConferenceFooterPlateformLinks } from '@/_mockApis/footer/ConferenceFooter';
</script>
<template>
    <div class="conference-footer bg-themecolordark py-md-12 py-5 position-relative">
        <div class="py-md-4 py-sm-3">
            <v-container class="pb-3">
                <v-row>
                    <v-col cols="12" md="4" sm="6">
                        <WhiteLogo />
                        <div class="text-muted mt-md-11 mt-6">© Copyright 2024. All rights reserved by LandingPro Theme.
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                            <div class="font-weight-medium mb-5">Features</div>
                            <ul>
                                <li class="mb-2" v-for="link in ConferenceFooterFeatureLinks" :key="link.title">
                                    <NuxtLink :to="link.url"
                                        class="text-muted text-decoration-none text-capitalize font-weight-regular position-relative ">
                                        {{link.title }}
                                        <v-chip v-if="link.tag" class="bg-success">hiring</v-chip>
                                    </NuxtLink>
                                </li>
                            </ul>
                    </v-col>
                    <v-col cols="12" md="2" sm="6">
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
                    <v-col cols="12" md="3" sm="6">
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
                </v-row>
            </v-container>
        </div>
    </div>
</template>