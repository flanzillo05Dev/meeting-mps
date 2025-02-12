<script setup lang="ts">
import { WorkingprocessData } from '@/_mockApis/demos/nft';
</script>
<template>
    <section class="working-process  py-md-12 py-5 ">
        <div class="py-md-10 py-sm-5">
            
            <v-container>
                <v-row class="justify-center">
                    <v-col cols="12" md="7">
                        <h2 class="text-h2 text-center text-dark mb-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Working Process</h2>
                        <h5 class="text-h5 font-weight-regular  text-center text-muted" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">We offer you a new generation of task and project</h5>
                    </v-col>
                    <v-col cols="12" class="mt-8">
                        <v-row>
                            <v-col cols="12" lg="3" sm="6" v-for="card in WorkingprocessData" :key="card.img">
                                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                    <div class="d-sm-flex align-center mb-sm-8 text-sm-left text-center">
                                        <v-avatar size="55" color="primary" class="rounded-lg">
                                            <img :src="card.img" :alt="card.img" width="30" />
                                        </v-avatar>
                                        <h4 class="ml-sm-6 text-h4 font-weight-bold pr-sm-3 my-sm-0 my-4 text-dark lh-normal">{{ card.title }}</h4>
                                    </div>
                                    <p class="text-body-1  text-muted text-sm-left text-center mb-sm-0 mb-3">{{ card.desc }}</p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>