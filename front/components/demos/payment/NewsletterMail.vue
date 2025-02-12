<script setup lang="ts">
import { ref } from 'vue';
import { CircleCheckFilledIcon } from 'vue-tabler-icons';
const reviewstar1 = ref(4.5);
</script>
<template>
    <div class="position-relative">
        <v-container class="max-width-xl">
            <div class="newsletter-mail bg-lightinfo rounded-md ">
                <!--Newsletter Part-->
                <div class="pa-lg-10 pa-5">
                    <v-row class="justify-center text-center">
                        <v-col cols="12" md="7">
                            <div>
                                <img src="/images/payment/free.png" alt="free" class="mb-n1" />
                                <h2 class="text-h2 text-dark mb-5">
                                    Get started in under <span class="text-primary">15 minutes</span></h2>
                                <div class="newsletter-conatiner elevation-10 py-2 pl-4 pr-3 rounded-md justify-center bg-surface">
                                    <div class="d-flex">
                                        <v-text-field variant="plain" density="compact"
                                            class="position-relative rounded-md bg-surface custom-placeholer-color elevation-0"
                                            placeholder="Enter your email address" single-line hide-details rounded >
                                        </v-text-field>
                                        <v-btn variant="flat" size="large" class="rounded-md" color="primary">get
                                            demo</v-btn>
                                    </div>
                                </div>
                                <p class="text-muted d-flex align-center justify-center mt-5 pb-5">
                                    <CircleCheckFilledIcon class="text-primary  mr-3" size="30" />
                                    No personal credit checks or guarantee, with 20x higher limits
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <!--Review/Ratting App Part-->
                <div class="bg-surface ma-2 rounded-b-md  mb-5 ">
                    <div class="py-md-15 px-md-15 px-4 py-6">
                        <div class="px-md-7 px-4 ">
                            <v-row class="justify-space-between  align-items-center">
                                <v-col cols="12" md="5">
                                    <div class="text-sm-left text-center">
                                        <img src="/images/payment/quote.png" alt="quote" class="mb-sm-8 mb-4" />
                                        <div class="font-weight-medium mb-md-12 mb-6 ">
                                            It’s easy to set up and the support experience is unparalleled. every
                                            transaction the instant it happens and correct wasteful behavior. What a relief.
                                        </div>
                                        <div class="d-flex align-center">
                                            <v-avatar class="rounded-md" size="64">
                                                <img src="/images/payment/profile-img.png" height="64" width="64">
                                            </v-avatar>
                                            <h6 class="text-h6 font-weight-bold ml-4">Nina B. Freeman </h6>
                                            <div class="text-muted font-weight-light ml-2"> —  Founder at Litchi Care</div>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <div class="text-center text-sm-start">
                                                <ClientOnly><v-rating v-model="reviewstar1" hover density="compact" half-increments
                                                    readonly color="warning" class="ml-n2"></v-rating></ClientOnly>
                                                <h6 class="text-h6 mb-8">
                                                    4.5 <span class="text-muted font-weight-light ml-1"> /5 —From 1800+
                                                        ratings</span>
                                                </h6>
                                                <NuxtLink to="/">
                                                    <img src="/images/download/apple-2.png" alt="apple app"
                                                        class="mr-md-6 mr-6" />
                                                </NuxtLink>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <div class="text-center text-sm-start">
                                                <ClientOnly><v-rating v-model="reviewstar1" hover density="compact" half-increments
                                                    readonly color="warning" class="ml-n2"></v-rating></ClientOnly>
                                                <h6 class="text-h6 mb-8">
                                                    4.7 <span class="text-muted font-weight-light ml-1"> /5 —From 1800+
                                                        ratings</span>
                                                </h6>
                                                <NuxtLink to="/">
                                                    <img src="/images/download/gp-2.png" alt="google pay app" />
                                                </NuxtLink>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </div>
                <v-row>
                </v-row>
            </div>
        </v-container>
    </div>
</template>