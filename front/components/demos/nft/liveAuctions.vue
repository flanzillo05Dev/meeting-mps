<script setup lang="ts">
import { LiveAuctionData } from '@/_mockApis/demos/nft'
import { HeartIcon } from 'vue-tabler-icons';
</script>
<template>
    <section class="live-auctions bg-light py-md-12 py-5">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <div class="text-center">
                    <h2 class="text-h2 text-center text-dark mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Live Auctions</h2>
                </div>
                <v-row class="mt-sm-12 mt-8 justify-center">
                    <v-col cols="12" lg="3" md="4" sm="6" v-for="card in LiveAuctionData" :key="card.img">
                        <v-card elevation="0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <v-card-item class="pa-4">
                                <div class="rounded-md position-relative overflow-hidden hover-card lh-10" >
                                    <NuxtLink to="#">
                                        <img :src="card.img" class="zoom-in w-100 h-100" />
                                    </NuxtLink>
                                </div>
                                <div class="d-flex align-center justify-space-between my-4">
                                    <h5 class="text-h5 font-weight-bold text-dark mb-1">{{ card.title }}</h5>
                                    <div class="text-subtitle-1 text-muted font-weight-medium">
                                        <v-btn variant="plain" density="compact" :ripple="false" class="px-0 no-effect"
                                            min-width="auto">
                                            <HeartIcon stroke-width="1.5" size="20" />
                                        </v-btn>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-space-between">
                                    <div>
                                        <div class="text-subtitle-1 text-primary mb-1 font-weight-medium">Current Bid</div>
                                        <div class="text-body-1 font-weight-bold mb-1 text-dark">
                                            {{ card.price1 }}
                                        </div>
                                        <div class="text-subtitle-1 text-dark font-weight-medium">
                                            {{ card.price2 }}
                                        </div>
                                    </div>
                                    <div>
                                        <v-btn variant="outlined" color="primary">place a bid</v-btn>
                                        <div class="text-subtitle-2 mt-3 text-right text-muted">{{ card.bid }}</div>
                                    </div>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>