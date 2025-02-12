<script setup lang="ts">
import { ref } from 'vue';
import { PricingPlanTypesData } from '@/_mockApis/demos/sass';
/* Switch monthly/yearly pricing */
const text = ref('monthly')
const priceplan = ref(false);
const priceplanyearly = ref(false);
</script>
<template>
    <div class="sass-pricing  position-relative overflow-hidden border-top py-md-15 py-8">
        <div class="pulse-animation3">
            <div class="pulse3">
                <div class="ring3"></div>
                <div class="ring3"></div>
                <div class="ring3"></div>
                <div class="ring3"></div>
            </div>
        </div>
        <div class="py-md-15 py-sm-8 py-4">
            <div class="py-md-7">
                <v-container>
                    <v-row class="align-center">
                        <v-col cols="12" md="4" >
                            <div class="pe-md-16 text-md-left text-center">
                                <h2 class="text-h2 text-dark">Choose our Pricing Plans</h2>
                                <v-row class="d-flex border rounded-pill my-5 justify-center mr-md-15 price-tab">
                                    <v-btn-toggle v-model="text" rounded="0" group class="d-flex justify-center w-100"
                                        density="comfortable">
                                        <v-container class="pa-3">
                                            <v-row>
                                                <v-col cols="6" sm="6" class="pa-1 pr-2">
                                                    <v-btn value="monthly" @click="priceplan = !priceplan" :ripple="false"
                                                        size="large" block rounded>
                                                        monthly
                                                    </v-btn>
                                                </v-col>
                                                <v-col cols="6" sm="6" class="pa-1 pl-2">
                                                    <v-btn value="annually" @click="priceplan = !priceplan" :ripple="false"
                                                        class=" " size="large" block rounded>
                                                        annually
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-btn-toggle>
                                </v-row>
                                <p  v-if="priceplan" class="text-body-1 text-muted mt-sm-12 mt-10">
                                    Phasellus ut nibh sit amet libero tempor corperer. Proin eu augue sit amet diam mattis
                                    lacinin.
                                </p>
                                <p v-else class="text-body-1 text-muted mt-sm-12 mt-10">
                                    Amet consectetur adipisicing elit. Atque numquam non, delectus eu augue sit amet optio dolor diam mattis lacinia.
                                </p>
                            </div>
                        </v-col>

                        <v-col cols="12" md="4" sm="6" v-for="card in PricingPlanTypesData" :key="card.caption" >
                            <!-----Blue card----->
                            <v-card v-if="card.cardbgcolor" elevation="10" class="rounded-md py-sm-11 py-6 px-md-7 px-4 bg-primary">
                                <div class="d-flex align-center mb-4">
                                    <h2 v-if="priceplan" class="text-h2 text-white">${{ card.yearlyprice }}</h2>
                                    <h2 v-else class="text-h2 text-white">${{ card.price }}</h2>
                                    <span v-if="priceplan" class="text-white   mt-3 ">/Year</span>
                                    <span v-else class="text-white   mt-3 ">/Month</span>
                                </div>
                                <h4 class="text-white  text-caption font-weight-bold  mb-3" v-text="card.caption"></h4>
                                <p class="text-white pb-6 op-07">Sometimes chunks as necessary making this the first true</p>
                                <v-divider class="op-07"></v-divider>
                                <v-list class="mb-0 pl-0 bg-primary pt-5" density="compact">
                                    <v-list-item class="px-0" v-for="desc in card.list" :key="desc.listtitle">
                                        <v-list-item-title v-if="desc.status"
                                            class="d-flex align-center text-white text-h6 font-weight-regular">
                                            <v-avatar size="25" :class="'text-center mr-4 bg-' + desc.bgcolor">
                                                <component :is="desc.icon" :class="'text-' + desc.iconcolor"
                                                    stroke-width="4" size="13" />
                                            </v-avatar>
                                            {{ desc.listtitle }}
                                        </v-list-item-title>
                                        <v-list-item-title v-else class=" d-flex align-center text-white text-h6 font-weight-regular">
                                            <v-avatar size="25" :class="'text-center mr-4  bg-' + desc.bgcolor">
                                                <component :is="desc.icon" :class="'text-' + desc.iconcolor"
                                                    stroke-width="4" size="13" />
                                            </v-avatar>
                                            {{ desc.listtitle }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                <v-btn color="white"  size="large" class="mt-6 text-primary px-10" flat>{{ card.buttontext }}</v-btn>
                            </v-card>
                            <!-----White card----->
                            <v-card v-else elevation="10" class="rounded-md py-sm-11 py-6 px-md-7 px-4 ">
                                <div class="d-flex align-center mb-4">
                                    <h2 v-if="priceplan" class="text-h2 text-primary">${{ card.yearlyprice }}</h2>
                                    <h2 v-else class="text-h2 text-primary">${{ card.price }}</h2>
                                    <span v-if="priceplan" class="text-muted   mt-3">/Year</span>
                                    <span v-else class="text-muted mt-3">/Month</span>
                                </div>
                                <h4 class="text-dark  text-caption font-weight-bold mb-3" v-text="card.caption"></h4>
                                <p class="text-muted pb-6">Sometimes chunks as necessary making this the first true</p>
                                <v-divider></v-divider>
                                <v-list class="mb-0 pl-0 bg-transparent pt-5" density="compact">
                                    <v-list-item class="px-0" v-for="desc in card.list" :key="desc.listtitle">
                                        <v-list-item-title v-if="desc.status"
                                            class="d-flex align-center text-h6 font-weight-regular">
                                            <v-avatar size="25" :class="'text-center mr-4 bg-' + desc.bgcolor">
                                                <component :is="desc.icon" :class="'text-' + desc.iconcolor"
                                                    stroke-width="4" size="13" />
                                            </v-avatar>
                                            {{ desc.listtitle }}
                                        </v-list-item-title>
                                        <v-list-item-title v-else class=" d-flex align-center  text-h6 font-weight-regular">
                                            <v-avatar size="25" :class="'text-center mr-4 bg-' + desc.bgcolor">
                                                <component :is="desc.icon" :class="'text-' + desc.iconcolor"
                                                    stroke-width="4" size="13" />
                                            </v-avatar>
                                            {{ desc.listtitle }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                <v-btn color="primary" size="large" class="mt-6 px-10" flat>{{ card.buttontext }}</v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

