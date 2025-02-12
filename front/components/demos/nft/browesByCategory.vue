<script setup lang="ts">
import { BrowesCatagoryData } from '@/_mockApis/demos/nft';
</script>
<template>
    <section class="browse-category py-md-12 py-5">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <h2 class="text-h2  text-dark mb-4">Browse by category</h2>
                    <h5 class="text-h5 font-weight-regular text-muted">We offer you a new generation of task and project</h5>
                </div>
                <v-row class="mt-8">
                    <v-col cols="12" lg="6">
                        <div class="browse-img rounded-md position-relative overflow-hidden hover-card h-100"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <NuxtLink to="#">
                                <img src="/images/homepage/browse-category/sports.jpg" alt=""
                                    class="img-fluid zoom-in w-100 h-100">
                            </NuxtLink>
                            <div class="browse-img-content position-absolute">
                                <h4 class="text-white text-h4 font-weight-bold">Sports</h4>
                                <p class="text-subtitle-1 text-white mt-1">17,890 NFTs</p>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-row>
                            <v-col cols="12" sm="6" v-for="card in BrowesCatagoryData" :key="card.img">
                                <div class="browse-img rounded-md position-relative overflow-hidden hover-card h-100"  data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                    <NuxtLink to="#">
                                        <img :src="card.img" :alt="card.img" class="img-fluid zoom-in w-100 h-100">
                                    </NuxtLink>
                                    <div class="browse-img-content position-absolute">
                                        <h4 class="text-white text-h4 font-weight-bold">{{ card.title }}</h4>
                                        <p class="text-subtitle-1 text-white mt-1">{{ card.price }}</p>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <div class="d-flex justify-center mt-sm-12 mt-8">
                    <v-btn variant="outlined" size="x-large" color="primary">view all</v-btn>
                </div>
            </v-container>
        </div>
    </section>
</template>