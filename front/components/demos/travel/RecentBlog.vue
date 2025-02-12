<script setup lang="ts">
import { RecentBlogData } from '@/_mockApis/demos/travel';
</script>
<template>
    <div class="position-relative py-md-15 py-4">
        <v-container>
            <h2 class="text-h2 text-dark text-center mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                Recent Blog</h2>
            <v-row class="justify-space-md-left justify-center">
                <v-col cols="12" md="4" sm="6" v-for="card in RecentBlogData" :key="card.title" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <div class="text-left">
                        <div class="hover-card overflow-hidden rounded-md lh-10 mb-6 position-relative">
                            <NuxtLink :to="card.link">
                                <img :src="card.image" :alt="card.image" class="zoom-in w-100" />
                            </NuxtLink>
                        </div>
                        <div class="text-primary font-weight-medium mb-1">{{ card.country }}</div>
                        <NuxtLink :to="card.link" class="text-h4 text-decoration-none font-weight-medium text-dark hover-primary lh-normal">{{ card.title }}
                        </NuxtLink>
                        <p class="text-muted text-subtitle-1 mt-2 op-05">{{ card.time }}</p>
                    </div>
                </v-col>
            </v-row>
            <div class="d-flex justify-center mt-sm-16 mt-8">
                    <v-btn variant="outlined" size="large" class="px-8" color="primary">view more</v-btn>
                </div>
        </v-container>
    </div>
</template>