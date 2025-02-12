
import { CheckIcon } from 'vue-tabler-icons';

<template>
    <div class="py-md-15 py-8">
        <div class="py-md-15 py-sm-8">
            <v-container>
                <v-row class="align-center">
                    <v-col cols="12" md="6">
                        <div class="text-md-start text-center">
                            <img src="/images/corporate/build-everything.png" alt="image" class="img-fluid" />
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <div class="d-flex align-center mb-5">
                            <span class="bg-success pa-2 rounded-circle mr-2"></span>
                            <h6 class="text-subtitle-1 text-dark font-weight-bold">build everything</h6>
                        </div>
                        <h2 class="text-h2 text-dark mb-md-8 mb-6">Build amazing websites and landing pages with ease</h2>
                        <p class="text-muted mb-md-11 mb-5 text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida.</p>
                        <v-row class="mb-sm-4 mb-1">
                            <v-col cols="12" sm="6" class="pb-sm-4 pb-0">
                                <div class="d-flex align-center mb-4">
                                    <v-avatar size="26" class="bg-lightinfo"><CheckIcon class="text-primary"  stroke-width="4" size="13" /></v-avatar>
                                    <div class="ml-6 text-body-1">Easy Drag & Drop</div>
                                </div>
                                <div class="d-flex align-center mb-4">
                                    <v-avatar size="26" class="bg-lightinfo"><CheckIcon class="text-primary"  stroke-width="4" size="13" /></v-avatar>
                                    <div class="ml-6 text-body-1">Powered by Elementor</div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6" class="pt-sm-4 pt-0">
                                <div class="d-flex align-center mb-4">
                                    <v-avatar size="26" class="bg-lightinfo"><CheckIcon class="text-primary"  stroke-width="4" size="13" /></v-avatar>
                                    <div class="ml-6 text-body-1">Create new sections</div>
                                </div>
                                <div class="d-flex align-center mb-4">
                                    <v-avatar size="26" class="bg-lightinfo"><CheckIcon class="text-primary"  stroke-width="4" size="13" /></v-avatar>
                                    <div class="ml-6 text-body-1">Ready to use</div>
                                </div>
                            </v-col>
                        </v-row>   
                        <v-btn variant="flat" color="primary" size="large" class="px-9">get started</v-btn> 
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>