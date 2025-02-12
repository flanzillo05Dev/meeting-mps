<script setup lang="ts">
import { WorldClassSpeakersData } from '@/_mockApis/demos/conference';
</script>
<template>
    <div class="team py-md-12 py-5 ">
        <div class="py-sm-5">
            <v-container>
                <div class="text-center">
                    <h2 class="text-h2 text-dark mb-3"  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">World Class Speakers</h2>
                </div>
                <v-row>
                    <v-col cols="12" lg="3" md="3" sm="6" v-for="card in WorldClassSpeakersData" :key="card.name" class="mt-sm-8 mt-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <div class="hover-card overflow-hidden rounded-md lh-10 mb-7">
                            <img :src="card.img" :alt="card.img" class="zoom-in w-100" />
                        </div>
                        <h5 class="text-h5 font-weight-bold text-dark mb-1">{{ card.name }}</h5>
                        <p class="text-muted">{{ card.designation }}</p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>