<script setup lang="ts">
import { ref } from 'vue';
const dialog = ref(false);
</script>
<template>
    <!---Modal Video--->
    <v-dialog v-model="dialog" max-width="800">
        <v-card>
            <div class="d-flex align-center justify-space-between pa-4">
                <h3 class="text-caption font-weight-bold text-dark">Video</h3>
                <v-btn @click="dialog = false" variant="plain" density="compact" class="no-effect mr-n4 text-dark" :ripple="false">
                    <XIcon />
                </v-btn>
            </div>
            <v-divider></v-divider>
            <div class="pa-4">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/BHYMc9m4tQA?si=xF1wF-KW24FbWITG"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true"></iframe>
            </div>
        </v-card>
    </v-dialog>
    <div class="spend-save position-relative pb-md-15 pb-8">
            <v-container>
                <v-row class="justify-center text-center">
                    <v-col cols="12" md="7">
                        <h2 class="text-h2 text-dark mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">The best way to <span class="text-primary">spend and save</span></h2>
                        <p class="text-muted mb-md-12 pb-6 text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </v-col>
                </v-row>
                <v-row class="justify-center text-center">
                    <v-col cols="12" sm="10">
                        <div class="position-relative text-center">
                            <NuxtLink class="cursor-pointer"  @click="dialog = true">
                                <img src="/images/payment/spend.png" alt="spend and save" class="w-100" />
                            </NuxtLink>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>