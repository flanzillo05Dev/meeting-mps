<script setup lang="ts">
import { HotCollectionData } from '@/_mockApis/demos/nft'
</script>
<template>
    <section class="hot-collections bg-light py-md-12 py-5 ">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <div class="d-sm-flex justify-sm-space-between align-center mb-12 text-sm-left text-center">
                    <h2 class="text-h2 text-dark mb-sm-0 mb-5" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Hot Collections</h2>
                    <v-btn color="primary" size="x-large" variant="outlined" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">view all</v-btn>
                </div>
                <v-row>
                    <v-col cols="12" lg="3" sm="4" v-for="card in HotCollectionData" :key="card.img">
                        <v-card elevation="0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <v-card-item class="pa-4">
                                <div class="d-flex align-center">
                                    <div class="position-relative me-2">
                                        <v-avatar size="58" >
                                            <img :src="card.img" :alt="card.img" width="58" />
                                        </v-avatar>
                                        <img src="/images/icon/icon-check.svg" alt="icon" height="18" width="18"  class="position-absolute mt-10 ml-n5"/>
                                    </div>
                                    <div class="ml-3">
                                        <div class="text-body-1 text-dark font-weight-bold mb-1">{{ card.title }}</div>
                                        <div class="text-subtitle-1 text-muted font-weight-medium">{{ card.price }}</div>
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