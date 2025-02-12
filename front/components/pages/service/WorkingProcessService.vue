<script setup lang="ts">
import { WorkingprocessServiceData } from '@/_mockApis/pages/service';
</script>
<template>
    <div class="border-bottom">
        <div class="working-process  py-md-12 py-5 ">
            <div class="py-md-10 py-sm-5">
                <v-container>
                    <v-row class="justify-center">
                        <v-col cols="12" md="7">
                            <h2 class="text-h2 text-center text-dark mb-4" data-aos="fade-right" data-aos-delay="200"
                                data-aos-duration="1000">Working Process</h2>
                            <p class="text-body-1  text-center text-muted" data-aos="fade-left" data-aos-delay="200"
                                data-aos-duration="1000">We offer you a new generation of task and project</p>
                        </v-col>
                        <v-col cols="12" class="mt-8">
                            <v-row>
                                <v-col cols="12" md="3" sm="6" v-for="card in WorkingprocessServiceData" :key="card.img">
                                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                        <div class=" text-sm-left text-center">
                                            <v-avatar size="55" color="primary" class="mb-5">
                                                <img :src="card.img" :alt="card.img" width="40" />
                                            </v-avatar>
                                            <h4 class="text-h4 font-weight-bold mb-8">{{ card.title }}</h4>
                                        </div>
                                        <p class="text-body-1 text-muted text-sm-left text-center mb-sm-0 mb-3">{{ card.desc
                                        }}</p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
</div></template>