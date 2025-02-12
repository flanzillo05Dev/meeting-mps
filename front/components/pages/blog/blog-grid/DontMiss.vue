
<script setup lang="ts">
import { MailIcon, Message2Icon } from 'vue-tabler-icons';

const checked = ref(true);
</script>
<template>
    <div class="py-sm-15 py-8 bg-lightprimarygray">
        <div class="py-sm-10 py-5">
            <v-container>
                <v-row class="align-center justify-center">
                    <v-col cols="12" lg="9" md="8">
                        <div>
                            <h2 class="text-h2 mb-sm-10 mb-5 text-dark">Don't Want to Miss Anything?</h2>
                            <v-row class="align-center mb-sm-12 mb-8">
                                <v-col cols="12" sm="3">
                                    <h5 class="text-h5 text-sm-start text-dark">Sign up for Newsletters</h5>
                                </v-col>
                                <v-col cols="12" sm="9">
                                    <v-row>
                                        <v-col cols="12" md="4" sm="6" class="py-0">
                                            <v-checkbox label="Daily Newsletter " color="primary" class="text-muted"  hide-details density="compact"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6" class="py-0">
                                            <v-checkbox label="Advertising Updates" v-model="checked" color="primary" class="text-muted" hide-details density="compact"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6" class="py-0">
                                            <v-checkbox label="Week in Review " color="primary" class="text-muted" hide-details density="compact"> </v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6" class="py-0"> 
                                            <v-checkbox label="Event Updates " color="primary" class="text-muted" hide-details density="compact"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6" class="py-0">
                                            <v-checkbox label="Startups Weekly" color="primary" class="text-muted" hide-details density="compact"></v-checkbox>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6" class="py-0">
                                            <v-checkbox label="Podcasts " color="primary" class="text-muted" hide-details density="compact"></v-checkbox>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="dont-miss d-sm-flex align-center flex-fill ">
                            <v-text-field  variant="outlined" density="comfortable" color="primary" class="bg-surface mr-sm-4 custom-placeholer-color custom-big-placeholder-color position-relative"
                                placeholder="Your email" single-line hide-details>
                                <MailIcon class="text-primary mr-3 mt-1 ml-n1" size="22" />
                            </v-text-field>
                            <v-btn color="primary" size="large" class="mt-sm-0 mt-4  m-btn100" variant="flat">Subscribe*</v-btn>
                        </div>
                        <div class="text-subtitle-1 text-muted text-sm-start text-center mt-4">
                            * Yes, I agree to the <NuxtLink to="#" class="text-decoration-none text-primary">terms</NuxtLink> and <NuxtLink to="#" class="text-decoration-none text-primary">privacy policy</NuxtLink>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>