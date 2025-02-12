
<script setup lang="ts">
import { FaqIconsData } from '@/_mockApis/demos/sass';
import { SearchIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="sass-faq bg-light py-md-15 py-8">
        <div class="py-md-15 py-0">
            <v-container>
                <div class="text-center">
                    <h2 class="text-h2 text-dark mb-1">Frequently asked questions</h2>
                    <p class="text-muted text-body-1">sometimes chunks as necessary making this the first search</p>
                    <v-row class="justify-center mt-md-8 mt-5">
                        <v-col cols="12" md="8">
                            <v-text-field variant="underlined" density="comfortable" placeholder="Search"
                                class="position-relative custom-placeholer-color" color="primary">
                                <v-btn density="compact" variant="plain"
                                    class="no-effect position-absolute right-0 text-primary op-1 mt-n3" :ripple="false">
                                    <SearchIcon stroke-width="3" />
                                </v-btn>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <!----FAQ Icons----->
                    <v-row class="justify-center mt-md-6 mt-5">
                        <v-col cols="12" md="2" sm="4" v-for="card in FaqIconsData" :key="card.title"
                            class="d-flex">
                            <v-card elevation="0" class="text-center rounded-md bg-surface faq-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                <NuxtLink :to="card.url" class="text-decoration-none text-dark">
                                    <div class="pa-4">
                                        <img :src="card.img" alt="icon" width="55" height="55" class="mb-4" />
                                        <h3 class="text-h5 font-weight-medium lh-normal mb-2">{{ card.title }}</h3>
                                    </div>
                                </NuxtLink>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </div>
    </div>
</template>