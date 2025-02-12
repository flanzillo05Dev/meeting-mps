<script setup  lang="ts">
import { ref } from 'vue';
const dialog = ref(false);
</script>
<template>
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
    <div class="bg-light pt-md-14 pt-sm-8 pt-3">
        <div class="pt-md-14 pt-0">
            <v-container class="pb-0">
                <v-row class="justify-space-between align-center mb-sm-15 mb-8">
                    <v-col cols="12" md="4">
                        <h2 class="text-h2 text-dark text-center text-md-start" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">How our product is working ?</h2>
                    </v-col>
                    <v-col cols="12" md="6">
                        <p class="text-muted text-body-1  text-center text-md-start"  data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Sometimes by accident, sometimes chunks as necessary making
                            Sometimes by accident, sometimes chunks as necessary making this the first true generator on the
                            Internet. recently with desktop publishing software like Aldus PageMaker</p>
                    </v-col>
                </v-row>
                <div class="position-relative lh-10">
                    <img src="/images/sass/working.jpg" alt="video banner" class="w-100 rounded-md " />
                    <!------Video  play button----->
                    <v-avatar size="68" class="play-btn position-absolute center-btn">
                        <v-btn height="68" width="68" @click="dialog = true" class="play-btn bg-white">
                            <PlayerPlayFilledIcon class="text-primary " size="22" />
                        </v-btn>
                    </v-avatar>
                </div>
            </v-container>
        </div>
    </div>
</template>