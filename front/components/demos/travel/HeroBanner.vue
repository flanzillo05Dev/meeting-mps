<script setup lang="ts">
import { ref } from 'vue';
const from = ref('Canada');
const to = ref('Malaysia');
const departure= ref('18 May 2024');
const returnback= ref('19 May 2024');
const adults = ref('02');
const childrens= ref('0');
</script>
<template>
    <div class="pb-md-15 pb-0 mt-95">
        <v-container class="max-width-xl pt-1">
            <v-card class="trip-bg px-md-15 px-sm-8 px-4 py-md-15 py-8 rounded-md" elevation="0">
                <v-row class=" align-end justify-space-between px-md-7 px-0 py-md-10 py-0">
                    <v-col cols="12" md="7" class="text-md-left text-center">
                        <h1 class="text-h1 mb-7 text-white lh-60" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Plan your trip with best travel experience</h1>
                        <v-btn color="primary" variant="flat" size="large" class="px-10"  data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">start your search</v-btn>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="rounded-md bg-surface" elevation="0">
                            <v-card-item class="pb-8">
                                <div class="d-flex align-items-center pb-3 border-bottom">
                                    <img src="/images/travel/svgs/flight.svg" width="41" height="32" class="me-3 ps-1"
                                        alt="">
                                    <h4 class="text-h4 font-weight-bold ">Flight</h4>
                                </div>
                                <div class="border-bottom py-3">
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <VLabel class="text-h6 font-weight-regular text-muted">From*</VLabel>
                                            <v-text-field v-model="from" variant="plain" density="compact" color="primary"
                                                hide-details class="travel_input"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <VLabel class="text-h6 font-weight-regular text-muted">To*</VLabel>
                                            <v-text-field v-model="to" variant="plain" density="compact"
                                                hide-details class="travel_input"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="border-bottom py-3">
                                    <v-row>
                                        <v-col cols="12"  lg="6" >
                                            <VLabel class="text-h6 font-weight-regular text-muted">Departure*</VLabel>
                                            <v-select  variant="plain" density="compact" hide-details  v-model="departure" class="travel_input"
                                                :items="['15 May 2024', '16 May 2024', '17 May 2024', '18 May 2024', '19 May 2024']"></v-select>
                                        </v-col>
                                        <v-col cols="12" lg="6" class="pt-lg-3 pt-0">
                                            <VLabel class="text-h6 font-weight-regular text-muted">Return</VLabel>
                                            <v-select  variant="plain" density="compact" hide-details  v-model="returnback" class="travel_input"
                                                :items="['15 May 2024', '16 May 2024', '17 May 2024', '18 May 2024', '19 May 2024']"></v-select>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="py-3">
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <VLabel class="text-h6 font-weight-regular text-muted">Adults</VLabel>
                                            <v-text-field v-model="adults" variant="plain" density="compact"
                                                hide-details class="travel_input text-h5"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <VLabel class="text-h6 font-weight-regular text-muted">Childrens</VLabel>
                                            <v-text-field v-model="childrens" variant="plain" density="compact"
                                                hide-details class="travel_input"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div>
                                    <v-btn  color="primary" size="large" variant="flat"  block>book now</v-btn>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>