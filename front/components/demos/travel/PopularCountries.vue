<script setup lang="ts">
import { PopularCountriesData } from '@/_mockApis/demos/travel';
</script>
<template>
    <div class="countries py-md-15 py-3">
        <v-container>
            <h2 class="text-h2 text-dark ">Popular Countries</h2>
            <v-row class="country-box">
                <v-col cols="6" lg="2" md="4" sm="4" class="country-box-list mt-10" v-for="card in PopularCountriesData" :key="card.flag">
                        <div class="border-left pl-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <img :src="card.flag" alt="flag" width="50" class="mb-4" />
                            <div class="countries-border position-relative">
                                <h4 class="text-h4 font-weight-bold text-dark">{{ card.country }}</h4>
                                <p class="text-18 text-muted">{{ card.offer }}</p>
                            </div>
                        </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>