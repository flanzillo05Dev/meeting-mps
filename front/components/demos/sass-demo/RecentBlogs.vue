<script setup lang="ts">
import { SassRecentBlogData } from '@/_mockApis/demos/sass';
import { ArrowRightIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="py-md-15 py-8">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="d-flex d-block align-center justify-space-between  mb-3 w-100">
                        <h2 class="text-h2 text-dark mb-1">Recent blog</h2>
                        <NuxtLink to="/"
                            class="font-weight-medium text-decoration-none d-flex align-center text-dark text-body-1 op-07 hover-op-1">
                            View More
                            <ArrowRightIcon size="18" class="ml-2" stroke-width="2.5" />
                        </NuxtLink>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" sm="6" v-for="card in SassRecentBlogData" :key="card.title">
                    <div class="text-left">
                        <div class="hover-card overflow-hidden rounded-md lh-10 mb-3 position-relative">
                            <NuxtLink :to="card.link">
                                <img :src="card.image" :alt="card.image" class="zoom-in w-100 rounded-md " />
                            </NuxtLink>
                            <div
                                class="position-absolute top-0 left-0 bg-primary py-2 font-weight-medium rounded-md mt-2 mr-3 ml-3 text-subtitle-1 px-4">
                                {{ card.tag }}</div>
                            </div>
                        <div class="pa-4">
                            <NuxtLink :to="card.link"
                                class="text-h4 text-decoration-none font-weight-medium lh-normal ">{{
                                    card.title }}
                            </NuxtLink>
                            <p class="text-muted text-subtitle-1 mt-4">{{ card.time }}</p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>