<script setup lang="ts">
import { PropertiesData } from '@/_mockApis/demos/realEstate';
</script>
<template>
    <div class="py-md-15 py-sm-8 py-4">
        <v-container>
            <h2 class="text-h2 text-dark mb-md-12 mb-8" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Discover Properties</h2>
            <v-row>
                <v-col cols="6" lg="2" md="2" sm="4" v-for="card in PropertiesData" :key="card.img">
                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <NuxtLink to="/"><img :src="card.img" alt="flag" width="85" class="mb-4" /></NuxtLink>
                        <div class="position-relative">
                            <NuxtLink to="/" class="text-decoration-none op-08 hover-op-1"><h4 class="text-h4 font-weight-bold text-dark ">{{ card.title }}</h4></NuxtLink>
                            <p class="text-muted">{{ card.prop }}</p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>