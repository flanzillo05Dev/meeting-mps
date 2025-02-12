<script setup lang="ts">
import { ref } from "vue";
import { ChevronRightIcon, PlayerPlayFilledIcon, TicketIcon } from 'vue-tabler-icons';
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

    <div class="course-hero position-relative py-md-15 py-0 mt-95">
        <v-container>
            <v-row class="justify-space-between align-center">
                <v-col cols="12" md="6">
                    <div class="text-md-left text-center">
                        <div class="text-h1 text-dark font-weight-bold mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            Learning is key to your success. Get custom designed courses
                        </div>
                        <p class="text-muted text-h5 font-weight-regular " data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            Embed powerful financial features into your product, Launch in weeks.
                        </p>
                        <div class="d-sm-flex justify-md-start justify-center mt-sm-10 mt-5" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            <v-btn color="primary" size="large" class="mr-sm-4 px-9 mb-sm-0 mb-3" variant="flat">
                                get started
                                <ChevronRightIcon size="18" class="ml-2" stroke-width="2.5" />
                            </v-btn>
                                <v-btn color="info" size="large" class="mw-auto bg-surface" variant="flat"  @click="dialog = true"> 
                                    <PlayerPlayFilledIcon size="18" stroke-width="2" /> <span class="text-white pl-3">How it works</span>
                                </v-btn>
                                
                        
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <img src="/images/course/home-banner.jpg" alt="banner" class="w-100" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>