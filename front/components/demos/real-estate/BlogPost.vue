<script setup lang="ts">
import { BlogPostData } from '@/_mockApis/demos/realEstate';
</script>
<template>
    <div class="py-md-15 py-8">
        <v-container>
            <div class="text-center">
                <h2 class="text-h2 mb-md-11 mb-8 text-dark" data-aos="fade-right" data-aos-delay="200"
                    data-aos-duration="1000">Blog Post</h2>
            </div>
            <v-row>
                <v-col cols="12" md="6" v-for="card in BlogPostData" :key="card.title" class="mb-sm-0 mb-4">
                    <v-row class="align-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <v-col cols="12" sm="4">
                            <div class="rounded-md overflow-hidden lh-10">
                                <img :src="card.image" alt="blog image" class="w-100  lh-10" />
                            </div>
                        </v-col>
                        <v-col cols="12" sm="8" class="pl-sm-5 pt-sm-3 pt-0">
                            <p class="text-muted  text-body-1 font-weight-medium mb-2">{{ card.date }}</p>
                            <NuxtLink :to="card.link"
                                class="text-h4 font-weight-medium text-decoration-none  lh-normal">{{ card.title
                                }}</NuxtLink>
                            <div class="mt-6">
                                <NuxtLink :to="card.link" class="text-body-1 text-decoration-none text-primary">Read More
                                </NuxtLink>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
</div></template>