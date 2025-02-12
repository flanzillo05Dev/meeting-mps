<script setup lang="ts">
import Logo from "@/layouts/logo/logo.vue"
import { FooterMenu1, FooterMenu2, FooterMenu3, SocialLinksIcons } from '@/_mockApis/footer/index';
</script>
<template>
    <section class="footer position-relative py-md-12 py-8">
        <v-container>
            <v-row>
                <v-col cols="12" md="5">
                    <Logo />
                </v-col>
                <v-col cols="12" md="7">
                    <v-row class="pb-sm-16 pb-8">
                        <v-col cols="12" sm="6">
                            <div class="font-weight-medium text-dark text-uppercase">Phone</div>
                            <NuxtLink to="tel:(630) 0536 220"
                                class="text-h5 font-weight-bold text-dark text-decoration-none">(630) 0536 220 </NuxtLink>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="font-weight-medium text-dark text-uppercase">email</div>
                            <NuxtLink to="mailto:info@landingpro.com"
                                class="text-h5 font-weight-bold text-dark text-decoration-none">info@landingpro.com
                            </NuxtLink>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row class="pb-7 mt-5">
                        <v-col cols="12" sm="4">
                            <h5 class="text-body-1 text-dark font-weight-medium mb-5">Company</h5>
                            <ul >
                                <li class="mb-2" v-for="link in FooterMenu1" :key="link.title">
                                    <NuxtLink :to="link.url"
                                        class="text-muted text-decoration-none text-capitalize font-weight-regular position-relative ">{{
                                            link.title }}</NuxtLink>
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <h5 class="text-body-1 text-dark font-weight-medium mb-5">Travel</h5>
                            <ul >
                                <li class="mb-2" v-for="link2 in FooterMenu2" :key="link2.title">
                                    <NuxtLink :to="link2.url"
                                        class="text-muted text-decoration-none text-capitalize font-weight-regular position-relative">{{
                                            link2.title }}</NuxtLink>
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <h5 class="text-body-1 text-dark font-weight-medium mb-5">Quick links</h5>
                            <ul >
                                <li class="mb-2" v-for="link3 in FooterMenu3" :key="link3.title">
                                    <NuxtLink :to="link3.url"
                                        class="text-muted text-decoration-none text-capitalize font-weight-regular position-relative">{{
                                            link3.title }}</NuxtLink>
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="5">
                    <ul class="d-flex align-center">
                        <li v-for="social in SocialLinksIcons" class="mr-4">
                            <NuxtLink :to="social.url" class="text-decoration-none">
                                <v-avatar size="30" color="primary" class="rounded-md">
                                    <component :is="social.icon" stroke-width="2" size="22" />
                                </v-avatar>
                            </NuxtLink>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="12" md="7">
                    <div class="d-sm-flex align-center newsletter">
                        <h5 class="text-body-1 text-dark font-weight-medium mr-sm-12 mb-sm-0 mb-4">Newsletter</h5>
                        <div class="d-flex align-center flex-fill">
                            <v-text-field class="ml-sm-12 custom-placeholer-color " variant="outlined" density="comfortable" color="primary"
                                placeholder="Email address" single-line hide-details>
                            </v-text-field>
                            <v-btn color="primary" size="large" class="" variant="flat">Subscribe</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>