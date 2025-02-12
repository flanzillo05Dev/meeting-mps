<script setup  lang="ts">
import { ref } from 'vue';
import { PlayerPlayFilledIcon, XIcon } from 'vue-tabler-icons';
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
    <div class="pb-sm-16 pb-8 mt-95 border-top">
        <v-container>
            <v-row class="align-center justify-md-space-between  justify-center  pb-5 pt-4">
                <v-col cols="12" md="6">
                    <div class="text-left position-relative about-content ">
                        <h2 class="text-h2 font-weight-bold text-dark mb-4" data-aos="fade-up" data-aos-delay="200"
                            data-aos-duration="1000">Human Resources</h2>
                        <p class="text-body-1 text-muted bg-surface position-relative z-index1" data-aos="fade-up"
                            data-aos-delay="400" data-aos-duration="1000">Sometimes by accident, sometimes chunks as
                            necessary
                            making this the generator on the Internet. Sheets containing Lorem.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card elevation="10" rounded="md" class="bg-light position-relative z-index1 mb-md-n16">
                        <v-card-item class="px-lg-15 px-8 py-sm-11 py-5">
                            <v-avatar size="30" color="white" class="me-6">
                                <img src="/images/servicepage/human-resources/quotes.png" alt="icon" width="12" />
                            </v-avatar>
                            <div class="font-weight-bold text-dark mt-2 mb-1">Fantastic Service</div>
                            <p class="text-h5 font-weight-regular text-muted mb-4">After using Landing pro my buisness skyrocketed!
                            </p>
                            <p class="text-muted">Recommended By
                            </p>
                            <div class="d-flex align-center mt-6">
                                <v-avatar size="47" class="mr-n2">
                                    <img src="/images/servicepage/human-resources/service-img1.jpg" alt="profile"
                                        height="47" width="47">
                                </v-avatar>
                                <v-avatar size="47" class="mr-n2">
                                    <img src="/images/servicepage/human-resources/service-img2.jpg" alt="profile"
                                        height="47" width="47">
                                </v-avatar>
                                <v-avatar size="47" class="mr-n2">
                                    <img src="/images/servicepage/human-resources/service-img3.jpg" alt="profile"
                                        height="47" width="47">
                                </v-avatar>
                                <v-avatar size="47" class="mr-n2" color="primary">
                                    16k
                                </v-avatar>
                                <p class="text-subtitle-1 text-grey100 ml-2"></p>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!------------>
        <div class="service-video mx-auto mt-sm-n5">
            <div class="video-bg position-relative rounded-md overflow-hidden lh-10 ">
                <img src="/images/servicepage/human-resources/services-video-bg.png"  alt="banner">
                <v-avatar size="70" class="play-btn">
                    <v-btn height="72" @click="dialog = true" class="bg-white">
                        <PlayerPlayFilledIcon class="text-primary" size="22" />
                    </v-btn>
                </v-avatar>
            </div>
            <v-container>
                <p class="text-muted text-body-1 mt-sm-8 mt-4">
                    Sometimes by accident, sometimes chunks as necessary making this the first true generator on the
                    Internet
                    recently with web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum sometimes chunks as
                    necessary.
                </p>
            </v-container>
        </div>
    </div>
</template>
<style>
.video-bg{
    background: #C7DAE1;
}
</style>