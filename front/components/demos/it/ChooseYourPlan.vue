<script setup lang="ts">
import { ref } from 'vue';
import { ChoosePlanData } from '@/_mockApis/demos/itpage';
/* Switch monthly/yearly pricing */
const text = ref('monthly')
const priceplan = ref(false);
const priceplanyearly = ref(false);
</script>
<template>
    <div class="choose-plan position-relative py-md-16 py-sm-5">
        <div class="py-md-12 py-5 ">
            <v-container>
                <v-row class="justify-center text-center">
                    <v-col cols="12" md="7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <h2 class="text-h2 text-dark mb-5">Choose your preferred plan </h2>
                        <p class="text-muted text-body-1 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </v-col>
                </v-row>
                <v-row lass="justify-center text-center">
                    <v-col cols="12" md="3" sm="6" class="d-flex mx-auto bg-lightinfo rounded-md pa-2 mb-7">
                        <v-btn-toggle v-model="text" rounded="0" group>
                            <v-btn value="monthly" @click="priceplan = !priceplan" :ripple="false"
                                class="rounded-md no-effect w-50">
                                monthly
                            </v-btn>
                            <v-btn value="annually" @click="priceplan = !priceplan" :ripple="false"
                                class="rounded-md no-effect w-50">
                                annually
                            </v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" sm="6" class="d-md-flex d-sm-none d-block align-end">
                        <v-card elevation="0" class="rounded-md px-0 position-relative h-100 ">
                            <div class="overflow-hidden  position-relative">
                                <div class="pa-sm-7 pa-4 position-absolute top-0">
                                    <div class="text-caption lh-normal text-white">Choosing yearly plan gives you <b>big 35% discount</b>
                                    </div>
                                    <p class="text-body-1 mt-5 text-white">This week 3,569 people have signedup with us</p>
                                </div>
                                <div class="overflow-hidden">
                                    <img src="/images/it/yearly-plan.png" alt="price banner" class="rounded-md " />
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" sm="6" v-for="card in ChoosePlanData" :key="card.caption">
                        <v-card elevation="10" class="rounded-md pa-sm-8 pa-4">
                            <h5 class="text-muted text-h5" v-text="card.caption"></h5>
                            <div class="d-flex align-center mt-2 mb-4">
                                <h2 v-if="priceplan" class="text-h1 text-dark">${{ card.yearlyprice }}</h2>
                                <h2 v-else class="text-h1 text-dark">${{ card.price }}</h2>
                                <span v-if="priceplan" class="text-muted   mt-3 ml-1">/ year</span>
                                <span v-else class="text-muted mt-3 ml-1">/ month</span>
                            </div>
                            <p class="text-muted pb-6 text-body-1">Best for people who have the startup / freelancing</p>
                            <v-divider></v-divider>
                            <v-list class="mb-0 pl-0 bg-transparent pt-5">
                                <v-list-item class="px-0" v-for="desc in card.list" :key="desc.listtitle">
                                    <v-list-item-title v-if="desc.status" class="d-flex align-center text-h6 font-weight-regular">
                                        <v-avatar size="26" :class="'text-center mr-2 bg-' + desc.bgcolor">
                                            <component :is="desc.icon" :class="'text-' + desc.iconcolor" stroke-width="3"
                                                size="15" />
                                        </v-avatar>
                                        {{ desc.listtitle }}
                                    </v-list-item-title>
                                    <v-list-item-title v-else class=" d-flex align-center  text-h6 font-weight-regular">
                                        <v-avatar size="26" :class="'text-center mr-2 bg-' + desc.bgcolor">
                                            <component :is="desc.icon" :class="'text-' + desc.iconcolor" stroke-width="3"
                                                size="15" />
                                        </v-avatar>
                                        {{ desc.listtitle }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                            <v-btn color="primary" size="large" class="mt-3" flat block>{{ card.buttontext }}</v-btn>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="mt-lg-12 mt-8">
                    <v-col cols="12" md="4">
                        <div class="text-center px-lg-4 mb-6 mb-md-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <img src="/images/it/svgs/abs024.svg" class="img-fluid" width="31" alt="" />
                            <h2 class="text-h1 text-dark mb-2 mt-6">4.86</h2>
                            <p class="text-muted text-body-1 px-md-6">Out of 5 stars from 3896 reviews on google platform</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="text-center px-lg-4 mb-6 mb-md-0" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            <img src="/images/it/svgs/com006.svg" class="img-fluid" width="31" alt="" />
                            <h2 class="text-h1 text-dark mb-2 mt-6">364</h2>
                            <p class="text-muted text-body-1 px-md-6">Client testimonials received in year 2024</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="text-center px-lg-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            <img src="/images/it/svgs/fin006.svg" class="img-fluid" width="31" alt="" />
                            <h2 class="text-h1 text-dark mb-2 mt-6">45M+</h2>
                            <p class="text-muted text-body-1 px-md-6">Revenue generated through new projects & marketing</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>